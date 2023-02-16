var inNumeroUm = document.getElementById("inNumeroUm");
var inNumeroDois = document.getElementById("inNumeroDois"); 
var btSomar = document.getElementById("btSomar");
var outMsg = document.getElementById("outMsg");
  
var vetNumeroUm = [];
var vetNumeroDois = [];
var vetSoma = [];

function somar(){   
    var numeroUm = Number(inNumeroUm.value);
    var numeroDois = Number(inNumeroDois.value);
    var soma = numeroUm + numeroDois;
    console.log(soma);
    vetSoma.push(soma);
    vetNumeroUm.push(numeroUm);
    var saida = "";
    vetNumeroDois.push(numeroDois); 
    for (var i = 0; i < vetSoma.length; i++) {
        
        saida += " A soma do numero " + vetNumeroUm[i] + " com o numero " + vetNumeroDois[i] + " é " + vetSoma[i] + "\n";
        outMsg.textContent = saida;
    }

}btSomar.addEventListener("click", somar)