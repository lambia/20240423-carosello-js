//CONSIGLIO: queste variabili mi servono nello scope globale? o possono essere dichiarate altrove?
let immagineAttualmenteAttiva;
let prossimaSlide;

//BONUS: e invece questa variabile? funziona anche se dichiarata nell'event handler. cosa mi cambia qui?
//trovare tutti gli elementi con classe .slide e metterli in un array
let slides = document.getElementsByClassName("slide");

document.getElementById("btnNext").addEventListener("click", function () {
	// iterare su tutte le slide
	for (let i = 0; i < slides.length; i++) {

		const slide = slides[i];
		// console.log(i, slide);

		//controlliamo se questa slide ha la classe active
		if (slide.classList.contains("active")) {
			//se si, rimuovo la classe active
			slide.classList.remove("active");
			//e prendo nota dell'indice
			immagineAttualmenteAttiva = i;
			// console.log("Ho rimosso la classe active dall'elemento: ", i);
		}
	}

	//prossima slide sarà idealmente quella attuale + 1
	prossimaSlide = immagineAttualmenteAttiva + 1;

	//se però l'immagine successiva non c'è, allora resetta la slide alla prima
	if (prossimaSlide >= slides.length) {
		prossimaSlide = 0;
	}

	//in ogni caso, rendi active la slide che ci interessa
	slides[prossimaSlide].classList.add("active");

	console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
});


//Esempio di event handler
document.getElementById("btnPrev").addEventListener("click", function () {
	//CODICE DA ESEGUIRE AL CLICK VA QUI
    console.log("Sono un pulsante ma non ho uno scopo, aiutami!");
});