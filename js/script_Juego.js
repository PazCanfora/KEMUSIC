const GenElec = parseInt(window.localStorage.getItem("choose"));
console.log(GenElec);

let boop = new Audio();
boop.src = "../../musica/boop.mp3";
let bonus = new Audio();
bonus.src = "../../musica/bonus.mp3";

//--------------------------------------------------LOGICA INDIVIDUAL--------------------------------------------------
/* ---------------------BOTONES ATRÁS--------------------- */
let BTN_Atrás = document.getElementById("BTN_Atrás");
BTN_Atrás.onclick = () => {
  window.location.href = "../ElecJuego.html";
};

//--------------------------------------------------DIVISIÓN POR PÁGINA--------------------------------------------------

switch (GenElec) {
  case 1:
    break;

  case 2:
    break;

  case 3:
    break;

  case 4:
    break;
}



//--------------------------------------------------HABILITAR Y DESHABILITAR JUEGO--------------------------------------------------
function agregarHTML() {
  var html = `<!-- ------------------------------------ CONTENEDOR PRINCIPAL ------------------------------------ -->
    <div id="Contenedor_Principal">
      <h1 id="Título_Principal" class="neon-text">¿Qué canción suena?</h1>
      <div id="Contenedor_Tiempos">
        <div id="BarraTiempoEscucha">
          <span class="BarraProgreso"></span>
        </div>
        <div id="BarraTiempoSelección">
          <span class="BarraProgreso"></span>
        </div>
      </div>
    </div>

    <!-- ------------------------------------ CONTENEDOR SECUNDARIO ------------------------------------ -->
    <div id="Contenedor_Secundario">
      <div id="Contenedor_Respuestas">
        <button class="Botones_Selección sec1" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span> SUMMER - ANTONIO VIVALDI
        </button>
        <button class="Botones_Selección sec2" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span> LIBERTANGO - PIAZZOLLA
        </button>
        <button class="Botones_Selección sec3" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span> CZARDAS - MONTI
        </button>
        <button class="Botones_Selección sec4" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span> WINTER - ANTONIO VIVALDI
        </button>
      </div>
      <div id="Contenedor_Bonus">
        <button class="Botones_Bonus" onmousedown="bonus.play()">PAUSA</button>
        <button class="Botones_Bonus" onmousedown="bonus.play()">LENTO</button>
        <button class="Botones_Bonus" onmousedown="bonus.play()">RÁPIDO</button>
        <button class="Botones_Bonus" onmousedown="bonus.play()">PISTA</button>
      </div>
    </div>`;

  let container_menú = document.getElementById("CONT_JuegoArranque");
  let container_juego = document.getElementById("Juego");

  container_juego.innerHTML = html;
  container_menú.parentNode.removeChild(container_menú);
}
