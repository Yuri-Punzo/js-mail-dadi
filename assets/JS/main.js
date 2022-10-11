/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

/* creo una lista di persone che possono accedere */
/* chiedo con un prompt o un input la mail all'utente */
/* verifico se la mail fa parte della lista */
/* stampo a schermo una risposta adeguata */

/* const vipsList = ["pincopanco@gmail.it",
                  "pancopinco@gmail.it",
                  "pincopallino@gmail.it",
                  "johndoe@gmail.it",
                  "janedoe@gmail.it" ]; */



function vipVerifier() {
    document.getElementById("result").style.display = "block";
    const vipsList = ["pincopanco@gmail.it",
                      "pancopinco@gmail.it",
                      "pincopallino@gmail.it",
                      "johndoe@gmail.it",
                      "janedoe@gmail.it"];
    const userMail = document.getElementById("mail").value;
    for (let i = 0; i <= vipsList.length; i++) {
        if (userMail === vipsList[i]) {
            console.log("sei dentro");
            break;
        } else {
            console.log("sei fuori");
        }
    }
}





/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */