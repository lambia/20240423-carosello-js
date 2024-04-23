//recupero tutte le slide e le metto in un array
let slides = document.getElementsByClassName("slide");

//conto le slide
//ora so che posso impostare come active una slide con indice tra (0) e (nSlides-1)
let nSlides = slides.length

//so che al caricamento della pagina l'active in html sarà sulla prima immagine
let slideSelected = 0;

//Al click sul pulsante
document.getElementById("btnNext").addEventListener("click", function () {

	//Rimuovo l'active attuale
	slides[slideSelected].classList.remove("active");
	console.log("Selezione -> rimuovi", slideSelected);
	
	//se non sono arrivato all'ultima immagine
	if( slideSelected < nSlides - 1 ){
		//la nuova selected è la prossima
		slideSelected++;
	} else {
		//la nuova selected è la prima
		slideSelected = 0;
	}
	
	//aggiungo l'active alla successiva
	slides[slideSelected].classList.add("active");
	console.log("Selezione -> aggiungi", slideSelected);
});


//Esempio di event handler
document.getElementById("btnPrev").addEventListener("click", function () {
    console.log("Sono un pulsante ma non ho uno scopo, aiutami!");
});