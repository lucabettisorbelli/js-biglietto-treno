let KmDaFare = prompt ("quanti Kilometri vuoi percorrere?");
let etaUtente = prompt ("quanti anni hai?");

KmDaFare = parseInt(KmDaFare);
etaUtente = parseInt(etaUtente)

//prezzo biglietto senza sconti

let prezzoPerKm = 0.21;
let prezzoBiglietto = prezzoPerKm * KmDaFare;
alert(`il prezzo del biglietto è: ${prezzoBiglietto + "€"}`)
