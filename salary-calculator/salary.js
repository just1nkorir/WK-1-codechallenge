let basic = parseInt(document.getElementById("basic"));
let benefits = parseInt(document.getElementById("benefits")).onClick;
let gross = basic + benefits;

function calculate() { 
    let gross = parseInt(gross.value);
    if (gross <= 24000) {
        tax = (gross * 0.1);
    } else if (gross > 24000 && gross <= 32333) {
        tax = (gross * 0.25);
    } else if (gross > 32333) {
        tax = (gross * 0.3);
    }
}