console.log("läuft");

const height = document.querySelector('#height');
const age = document.querySelector('#age');
const weight = document.querySelector('#weight');
const female = document.querySelector('#female');
const male = document.querySelector('#male');
const selection = document.querySelector('#selection')
const baseKcal = document.querySelector('#baseKcal');
const baseKj = document.querySelector('#baseKj');
const totalKcal = document.querySelector('#totalKcal');
const totalKj = document.querySelector('#totalKj');


const berechne = () => {

    if (female.checked) {
        let grundumsatzKcal = 655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value);
        baseKcal.innerHTML = grundumsatzKcal.toFixed(0);

        let grundumsatzKj = grundumsatzKcal * 4.184;
        baseKj.innerHTML = grundumsatzKj.toFixed(0);
    

        if (selection.value === "0.95") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);
    } 
    
    else if (selection.value === "1.5") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);


    } else if (selection.value === "1.7") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);

    } else if (selection.value === "1.9") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);


    } else if (selection.value === "2.2") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);
    } 
    
} else {

    let grundumsatzKcal = 664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value);
    baseKcal.innerHTML = grundumsatzKcal.toFixed(0);

    let grundumsatzKj = grundumsatzKcal * 4.184;
    baseKj.innerHTML = grundumsatzKj.toFixed(0);

    if (selection.value === "0.95") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);
    } 
    
    else if (selection.value === "1.5") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);


    } else if (selection.value === "1.7") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);


    } else if (selection.value === "1.9") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);


    } else if (selection.value === "2.2") {
        let gesamtumsatz = grundumsatzKcal * selection.value
        totalKcal.innerHTML = gesamtumsatz.toFixed(0);
        totalKj.innerHTML = gesamtumsatz.toFixed(0) * 4.184.toFixed(0);
    } 

}
}