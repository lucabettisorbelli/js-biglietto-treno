let KmDaFare = prompt ("quanti Kilometri vuoi percorrere?");
KmDaFare = parseInt(KmDaFare);


if (isNaN(KmDaFare)) {
    alert("inserisci un numero corretto")
}

let etaUtente = prompt ("quanti anni hai?");

etaUtente = parseInt(etaUtente);

if (isNaN(etaUtente)) {
    alert("inserisci un numero corretto")
}

//prezzo biglietto senza sconti

let prezzoPerKm = 0.21;
let prezzoSenzaSconti = prezzoPerKm * KmDaFare;


// sconti 

if (etaUtente < 18) {

    //sconto under 18
    let scontoBambini = 0.20 * prezzoSenzaSconti;
    let prezzoScontatoMinori = prezzoSenzaSconti - scontoBambini;

    alert(`prezzo ridotto under 18: ${prezzoScontatoMinori.toFixed(2)  + "€"}`);

} else if(etaUtente >= 65) {

    //sconto over 65
    let scontoAnziani = 0.40 * prezzoSenzaSconti;
    let prezzoScontatoAnziani = prezzoSenzaSconti - scontoAnziani;

    alert(`prezzo ridotto over 65: ${prezzoScontatoAnziani.toFixed(2)  + "€"}`);

} else {

    //prezzo intero
    alert(`prezzo intero: ${prezzoSenzaSconti.toFixed(2)  + "€"}`);
}



