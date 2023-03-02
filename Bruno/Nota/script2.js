var inNome = document.getElementById("inNome");
var inNota = document.getElementById("inNota");
var inNota2 = document.getElementById("inNota2");
var inNota3 = document.getElementById("inNota3");
var btVet = document.getElementById("btVet");
var btMedia = document.getElementById("btMedia");
var outMsg = document.getElementById("outMsg");

var vetNome = [];
var vetNota = [];
var vetNota2 = [];
var vetNota3 = [];
var vetMedia = [];

function media (nota1, nota2, nota3) {
    return (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
}

btMedia.addEventListener("click", function() {
    var resultado = media(inNota.value, inNota2.value, inNota3.value);
    vetMedia.push(resultado);
})



btVet.addEventListener("click", function() {
vetNome.push(inNome.value);
vetNota.push(inNota.value);
vetNota2.push(inNota2.value);
vetNota3.push(inNota3.value);
console.log(vetNome, vetNota,vetNota2,vetNota3);
});