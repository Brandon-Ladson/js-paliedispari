// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// l'utente sceglie se scommettere su pari o dispari
var scommessaUtente = prompt("scegli tra pari o dispari");
console.log("la tua scommessa è: " + scommessaUtente);

// dichiarazione numero utente
var numeroUtente = parseInt(prompt("scegli un numero tra 1 e 5"));
console.log("il tuo numero è: " + numeroUtente);

// funzione per dichiarare il numero random del computer

// for (var i = 0; i < 1; i++) {
//   var numero = generatoreNumeroPc(5);
//   console.log(numero);
// }
//
// function generatoreNumeroPc(numeroPc) {
//   return Math.floor(Math.random() * numeroPc) +1;
// }

var numero = generatoreNumeroPc()
console.log(numero);

function generatoreNumeroPc() {
  var numeroPc = Math.floor(Math.random() * 5) +1;
  return numeroPc;
}

// sommare i due numeri
var sommaNumeri = numeroUtente + numero;
console.log("la somma dei due numeri è: " + sommaNumeri);

// funzione per stabilere se la somma dei due numeri è pari o dispari
var risultato = confrontoNumeri();
console.log(risultato);

function confrontoNumeri() {

  if (sommaNumeri % 2 === 0) {
    return "pari";

  } else {
    return "dispari";
  }

}

// stampare messaggio di vittoria o sconfitta
if (scommessaUtente === risultato) {
  alert("HAI VINTO!")
} else {
  alert("HAI PERSO!");
}
