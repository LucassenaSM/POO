var inBusca = document.getElementById("inBusca");
var btBuscar = document.getElementById("btBuscar");
var outMsg = document.getElementById("outMsg");

var vetCategorias = ["Ação", "Terror", "Suspense", "Drama", "Romance"];

function buscar() {
  var busca = inBusca.value;

  for (var i = 0; i < vetCategorias.length; i++) {
    if (inBusca.value == vetCategorias[i]) {
     var existe = true;
      var categoria = busca;
    }else{
  }
  if (existe == true) {
    outMsg.textContent = "A categoria " + categoria + " existe!";
  } else {
    outMsg.textContent = "A categoria " + "não existe!";
    existe = false;
  }
}
}
btBuscar.addEventListener("click", buscar);
