// Esercizio di oggi: nome repo: js-mail-dadi
// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// definire un array della lista di mail
const mail = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com", "f@gmail.com"];


// definire la condizione in cui se la mail inserita corrisponde a quelle dell'array è corretta, altrimenti errata
let mailInserita = prompt('Inserisci la tua mail');
console.log(mailInserita);

let verify = false;

for (let i = 0; i < mail.length; i++) {
    if (mail[i] == mailInserita) {
        verify = true;
    }
}







if (verify){
    document.getElementById('risposta').innerHTML = 'La mail è corretta';

    // definire le variabile del giocatore e del pc con numeri random generati
    let giocatore = Math.floor(Math.random() * 6) + 1;
    console.log('Risultato del dado del giocatore ' + giocatore)
    let pc = Math.floor(Math.random() * 6) + 1;
    console.log('Risultato del dado del pc ' + pc)


    // verificare il vincitore al gioco dei dadi tramite le condizioni
    if (giocatore > pc){
        document.getElementById('risposta').innerHTML = 'Il giocatore ha vinto';
    }else if (giocatore < pc){
        document.getElementById('risposta').innerHTML = 'Il giocatore ha perso';
    }else{
        document.getElementById('risposta').innerHTML = 'Pareggio';
    }
     
}else{
    document.getElementById('risposta').innerHTML = 'La mail non è corretta';
}


