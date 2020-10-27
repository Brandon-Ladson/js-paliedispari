// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// l'utente inserisce una parola
var parolaUtente = prompt("scrivi una parola");

// creo un funzione per apire se la parola inserita è palindroma
function verificaParolaPali(parola) {

  var alorap = parola.split('').reverse().join('');

  if(alorap === parola){
    return "la parola inserieta è palidroma";

  } else {
    return "la parola inserieta non è palidroma";
  }

}

// stampo il risultato
document.getElementById('parolainserita').innerHTML = parolaUtente;

document.getElementById('messaggio').innerHTML = verificaParolaPali(parolaUtente);
