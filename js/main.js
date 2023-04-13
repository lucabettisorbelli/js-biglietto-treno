let KmDaFare = prompt ("quanti Kilometri vuoi percorrere?");
let etaUtente = prompt ("quanti anni hai?");

KmDaFare = parseInt(KmDaFare);
etaUtente = parseInt(etaUtente);

//prezzo biglietto senza sconti

let prezzoPerKm = 0.21;
let prezzoSenzaSconti = prezzoPerKm * KmDaFare;

// sconti 

if (etaUtente < 18) {

    //sconto under 18
    scontoBambini = 0.20 * prezzoSenzaSconti;
    prezzoScontatoMinori = prezzoSenzaSconti - scontoBambini;

    alert(`prezzo ridotto under 18: ${prezzoScontatoMinori.toFixed(2)  + "€"}`);

} else if(etaUtente >= 65) {

    //sconto over 65
    scontoAnziani = 0.40 * prezzoSenzaSconti;
    prezzoScontatoAnziani = prezzoSenzaSconti - scontoAnziani;

    alert(`prezzo ridotto over 65: ${prezzoScontatoAnziani.toFixed(2)  + "€"}`);

} else {

    //prezzo intero
    alert(`prezzo intero: ${prezzoSenzaSconti.toFixed(2)  + "€"}`);
}



