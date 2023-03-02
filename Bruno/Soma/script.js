var inNumber = document.getElementById("inNumber");
var inNumber2 = document.getElementById("inNumber2");
var btnSomar = document.getElementById("btnSomar");
var btnSomarVet = document.getElementById("btnSomarVet");
var outMsg = document.getElementById("outMsg");

var vetNumber1 = [1,2,5,0];
var vetNumber2 = [1,2,5,0];

function somar(number, number2) {
  return Number(number) + Number(number2);
}

btnSomar.addEventListener("click", function(){
var resultado = somar(inNumber.value, inNumber2.value);
outMsg.textContent = resultado});

btnSomarVet.addEventListener("click", function(){
    var resultado = 0;
    for (var i = 0; i < vetNumber1.length; i++) {
    if (vetNumber1[i] == ""){
        vetNumber1[i] = 0;
    }
    if (vetNumber2[i] == ""){
        vetNumber2[i] = 0;
    }
    resultado += somar(vetNumber1[i], vetNumber2[i]);
    outMsg.textContent = resultado;
}
console.log = resultado;
});
