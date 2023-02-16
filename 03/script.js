var inNumeroUm = document.getElementById("inNumeroUm");
var inNumeroDois = document.getElementById("inNumeroDois");
var btSomar = document.getElementById("btSomar");
var btSalvar = document.getElementById("btSalvar");
var btResultado = document.getElementById("btResultado");
var outMsg = document.getElementById("outMsg");

var vetNumeroUm = [];
var vetNumeroDois = [];
var vetSoma = [];
var soma = 0;
var numeroUm = 0;
var numeroDois = 0;

function somar() {
  numeroUm = Number(inNumeroUm.value);
  numeroDois = Number(inNumeroDois.value);
  soma = numeroUm + numeroDois;

  outMsg.textContent = "A soma dos numeros é: " + soma;
}
btSomar.addEventListener("click", somar);

function salvar() {
  vetSoma.push(soma);
  vetNumeroUm.push(numeroUm);
  vetNumeroDois.push(numeroDois);
  var saida = "\n";

  for (var i = 0; i < vetSoma.length; i++) {
    saida +=
      " A soma do numero " +
      vetNumeroUm[i] +
      " com o numero " +
      vetNumeroDois[i] +
      " é " +
      vetSoma[i] +
      "\n";
    outMsg.textContent = saida;
  }
}
btSalvar.addEventListener("click", salvar);

function resultado() {
      var somaTotal = 0;
      
    for (var i = 0; i < vetSoma.length; i++) {

    somaTotal += vetSoma[i];
    var saida;
    saida = "A soma de todas as somas é igual a: " + somaTotal;
    outMsg.textContent = saida;
  }
  vetSoma = [];

}
btResultado.addEventListener("click", resultado);
