//ad ogni click sul bottone, sposto la slide selezionata
document.getElementById("btnNext").addEventListener("click", function () {

    // recupero l'immagine attualmente selezionata
    const immagineAttivaElement = document.querySelector('.slide.active');

	// quella successiva è in omaggio
    let immagineNextElement = immagineAttivaElement.nextElementSibling;

    // se però siamo all'ultima immagine, non esiste nessuna "next", prendo la prima
    if(immagineAttivaElement.classList.contains('last')) {
        immagineNextElement = document.querySelector('.slide.first');
    }

    // immagini
    immagineAttivaElement.classList.remove('active');
    immagineNextElement.classList.add('active');

	console.log(`Ho spostato la selezione`, immagineAttivaElement, immagineNextElement);

});


//Esempio di event handler
document.getElementById("btnPrev").addEventListener("click", function () {
	//CODICE DA ESEGUIRE AL CLICK VA QUI
    console.log("Sono un pulsante ma non ho uno scopo, aiutami!");
});