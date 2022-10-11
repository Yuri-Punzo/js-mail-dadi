/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

/* creo una lista di persone che possono accedere */
/* chiedo con un prompt o un input la mail all'utente */
/* verifico se la mail fa parte della lista */
/* stampo a schermo una risposta adeguata */

function vipVerifier() {
    document.getElementById("result").style.display = "block";
    const userMail = document.getElementById("mail").value;
    const vipsList = ["pincopanco@gmail.it",
                      "pancopinco@gmail.it",
                      "pincopallino@gmail.it",
                      "johndoe@gmail.it",
                      "janedoe@gmail.it",
                      "alwaisalone@hotmail.com"];
    for (let i = 0; i < vipsList.length; i++) {
        if (userMail === vipsList[i]) {
            console.log("sei dentro");
            document.getElementById("in_or_out").innerHTML = "sei dentro !";
        } else {
            console.log("sei fuori");
            document.getElementById("in_or_out").innerHTML = "sei fuori...";
        }
    }
}

function displayNone() {
    document.getElementById("result").style.display = "none";
    const empty = document.getElementById("mail");
    empty.value = '';
}


/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* tramite un bottone genero un numero casuale da 1 a 6 */
/* ne genero due in realtà, uno per me e uno per il pc  */
/* confronta i due risultati, quello più alto vince */

document.getElementById("randomNumber").onclick = function(){
    let playerResult = Math.floor(Math.random() * 6) + 1;
    let computerResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("player_result").innerHTML = playerResult;
    document.getElementById("computer_result").innerHTML = computerResult;
    if (playerResult > computerResult) {
        console.log("player vince");
        document.getElementById("theWinnerIs").innerHTML = "You Won !"
    } else if (playerResult < computerResult) {
        console.log("computer vince");
        document.getElementById("theWinnerIs").innerHTML = "You Lost..."
    } else {
        console.log("Pareggio");
        document.getElementById("theWinnerIs").innerHTML = "Draw ! Nobody Wins !"
    }    
}