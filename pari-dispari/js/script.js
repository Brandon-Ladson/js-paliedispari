// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// l'utente sceglie se scommettere su pari o dispari
var scommessaUtente = prompt("scegli tra pari o dispari");
document.getElementById('scommessautente').innerHTML = "Hai scelto: " + scommessaUtente;

// dichiarazione numero utente
var numeroUtente = parseInt(prompt("scegli un numero tra 1 e 5"));
document.getElementById('numeroutente').innerHTML = "Il tuo numero è: " + numeroUtente;

// funzione per dichiarare il numero random del computer
var numeroPc = generatoreNumeroPc(5)
document.getElementById('numeropc').innerHTML = "Il numero del pc è: " + numeroPc;

function generatoreNumeroPc(numero) {
  return Math.floor(Math.random() * numero) +1;
}

// sommare i due numeri
var sommaNumeri = numeroUtente + numeroPc;
document.getElementById('sommanumeri').innerHTML = "La somma dei due numeri è: " + sommaNumeri;

// funzione per stabilere se la somma dei due numeri è pari o dispari
var risultato = confrontoNumeri(sommaNumeri);

function confrontoNumeri(numero) {
  if (numero % 2 === 0) {
    return "pari";

  } else {
    return "dispari";
  }
}

// stampare messaggio di vittoria o sconfitta
if (scommessaUtente === risultato) {
  document.getElementById('risultatogioco').innerHTML = "HAI VINTO!";

} else {
  document.getElementById('risultatogioco').innerHTML = "HAI PERSO!";
}
