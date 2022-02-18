function calcular() {

var n1 =  Number(document.querySelector('#txtnumero').value)
let text = "";
for (let i = 0; i < 11; i++) {
if (i === 11) { break; }
text += `${n1} * ` + i + " = " + `${n1*i}`+"<br>";
}   
document.getElementById("res").innerHTML = text;
}

function recalc() {

    window.location.reload()
}