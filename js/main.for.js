// document.getElementsByClassName("slide"); 
// document.querySelector("active"); 

// trovare tutti gli elementi con classe .slide e metterli in un array
let slides = document.getElementsByClassName("slide");

let immagineAttualmenteAttiva;
let prossimaSlide;

document.getElementById("btnNext").addEventListener("click", function () {
	//CODICE DA ESEGUIRE AL CLICK SU #btnNext VA QUI

	// iterare su tutte le slide
	for (let i = 0; i < slides.length; i++) {

		const slide = slides[i];
		// console.log(i, slide);

		//per ogni slide controlliamo se ha la classe active
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

	//CODICE DA ESEGUIRE AL CLICK SU #btnNext FINISCE QUI
});

console.log("fine script");