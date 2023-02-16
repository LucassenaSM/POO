var inBusca = document.getElementById("inBusca");
var btBuscar = document.getElementById("btBuscar");
var outMsg = document.getElementById("outMsg");

var vetCategorias = ['Ação','Terror','Suspense','Drama','Romance'];

function buscar(){
var busca = inBusca.value;
for (var i = 0; i < vetCategorias.length; i++) {
    if(vetCategorias[i] == busca){
        outMsg.textContent = "A categoria " + vetCategorias[i] + " existe!";
    }else{
        outMsg.textContent = "A categoria " + "não existe!";
    }
}
}btBuscar.addEventListener("click", buscar);