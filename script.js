// DATI:
function mostrarisultato() {
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;

    // RISOLUZIONE
    let totalPrice = km * 0.21;

    //se sotto i 18 anni 20% di sconto
    if (age <= 18) {
        totalPrice *= 0.8; 
    } 

    // se sopra i 65 anni 40% di sconto
    else if (age >= 65) {
        totalPrice *= 0.6; 
    }
document.getElementById('result').innerText = `Il prezzo del biglietto è: €${totalPrice.toFixed(2)}`;
}