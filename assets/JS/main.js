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
    /* if (vipsList.includes(userMail)) {

    } questo INCLUDES in pratica fa quello che abbiamo fatto con il ciclo qua sotto */
    let inOrOut = "sei fuori..."
    for (let i = 0; i < vipsList.length; i++) {
        if (userMail === vipsList[i]) {
            inOrOut = "sei dentro !"
        }
    }
    console.log(inOrOut);
    document.getElementById("in_or_out").innerHTML = inOrOut;
    /* altra possibilità sarebbe stata di dare il valore booleano true e false a X e poi fare un if else per andare a stampare a schermo: */

    /* let x = false
    for (let i = 0; i < vipsList.length; i++) {
        if (userMail === vipsList[i]) {
            x = true
        }
    }

    if (x === true) {
        console.log("sei dentro");
        document.getElementById("in_or_out").innerHTML = "sei dentro";
    } else {
        console.log("sei fuori");
        document.getElementById("in_or_out").innerHTML = "sei fuori";
    } */

    /* ancora un'altra possibilità, usando BREAK il ciclo si interrompe se trova la tua mail e scrive a schermo la stringa sei dentro. Invece se scorrendo non trova mai la tua mail darà risultato negativo. Se da qui si toglie il BREAK si rompe tutto, nel caso che ci siano valore negativi dopo quelli positivi il risultato verra dato negativo comunque..... */

    /* for (let i = 0; i < vipsList.length; i++) {
        if (userMail === vipsList[i]) {
            console.log("sei dentro");
            document.getElementById("in_or_out").innerHTML = "sei dentro"
            break;
        } else {
            console.log("sei fuori");
            document.getElementById("in_or_out").innerHTML = "sei fuori"
        }
    } */

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

document.getElementById("randomNumber").onclick = function () {
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