var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var inAltura = document.getElementById("inAltura");
var inPeso = document.getElementById("inPeso");
var btCalcular = document.getElementById("btCalcular");
var btSalvar = document.getElementById("btSalvar");
var outMsg = document.getElementById("outMsg");

var vetNomes = [];
var vetSobrenomes = [];
var vetAlturas = [];
var vetPesos = [];
var vetImc = [];
var imc;

function Calcular() {
  var nome = inNome.value;
  var sobrenome = inSobrenome.value;
  var peso = Number(inPeso.value);
  var altura = Number(inAltura.value);
  imc = peso / (altura * altura);
  outMsg.textContent = nome + " " + sobrenome + ", seu IMC é: " + imc.toFixed(1);
}
btCalcular.addEventListener("click", Calcular);

function salvar() {
  var nome = inNome.value;
  var sobrenome = inSobrenome.value;
  var altura = inAltura.value;
  var peso = inPeso.value;

  vetImc.push(imc);
  vetNomes.push(nome);
  vetSobrenomes.push(sobrenome);
  vetAlturas.push(altura);
  vetPesos.push(peso);
  console.log(vetNomes, vetAlturas, vetPesos, vetSobrenomes, vetImc);

  var saida = "Nome: " + vetNomes + "\n" + "Sobrenome: " + vetSobrenomes + "\n" + "Altura: " + vetAlturas + "\n" + "Peso: " + vetPesos;

  outMsg.textContent = saida;
}
btSalvar.addEventListener("click", salvar);
