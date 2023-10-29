const GenElec = parseInt(window.localStorage.getItem("choose"));
console.log(GenElec);

let boop = new Audio();
boop.src = "../../musica/boop.mp3";
let bonus = new Audio();
bonus.src = "../../musica/bonus.mp3";

let PuntajeFinal = 0;
let rondaActual = 0;
const totalRondas = 5;
let ContGeneral = 0;
//--------------------------------------------------LOGICA INDIVIDUAL--------------------------------------------------
/* ---------------------BOTONES ATRÁS--------------------- */
let BTN_Atrás = document.getElementById("BTN_Atrás");
BTN_Atrás.onclick = () => {
  window.location.href = "../ElecJuego.html";
};
/* ---------------------DECLARACIÓN DE CANCIONES--------------------- */
/* ---------------------CLÁSICO--------------------- */
let clásico = [14];
clásico[0] = "CZARDAS - MONTI";
clásico[1] = "HUNGARIAN DANCE - JOHANNES";
clásico[2] = "LIBERTANGO - PIAZZOLLA";
clásico[3] = "SUMMER - VIVALDI";
clásico[4] = "WINTER - VIVALDI";
clásico[5] = "MOONLIGHT SONATA - BEETHOVEN";
clásico[6] = "LACRIMOSA - MOZART";
clásico[7] = "CARMEN FANTASY - SARASATE";
clásico[8] = "HOWLS MOVING CASTLE - GHIBLI";
clásico[9] = "LA CAMPANELLA - PAGANINI";

/* ---------------------RANDOM PARA ARCHIVOS DE AUDIO--------------------- */
let OrdenDeCanciones = [];
for (let i = 0; i < totalRondas; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 9) + 0;
  OrdenDeCanciones.push(numeroAleatorio);
}
console.log(OrdenDeCanciones);
//--------------------------------------------------LÓGICA DE ARRANQUE--------------------------------------------------
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
          <span id="span4"></span>
        </button>
        <button class="Botones_Selección sec2" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
        </button>
        <button class="Botones_Selección sec3" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span> 
        </button>
        <button class="Botones_Selección sec4" onmousedown="boop.play()">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
        </button>
      </div>
      <div id="Contenedor_Bonus">
      <div class="DIV_PAUSAPRE" > 
      <img class="PREGUNTA" src="../../img/Pausa.svg" alt="">
      </div>
      <div class="DIV_PAUSAPRE" > 
      <img class="PAUSA" src="../../img/LENTO.svg" alt="">
      </div>
      <div class="DIV_PAUSAPRE" > 
      <img class="PAUSA" src="../../img/RÁPIDO.svg" alt="">
      </div>
      <div class="DIV_PAUSAPRE" > 
      <img class="PAUSA" src="../../img/Interrogación.svg" alt="">
      </div>
    </div>`;
  /* onmousedown="bonus.play() */
  /* ---------------------DECLARACIÓN ELEMENTOS--------------------- */
  let container_menú = document.getElementById("CONT_JuegoArranque");
  let container_juego = document.getElementById("Juego");
  let container_Contador = document.getElementById("CONT_Contador");

  /* ---------------------ELIMINAR EL MENÚ DE ARRANQUE--------------------- */
  container_menú.parentNode.removeChild(container_menú);
  //--------------------------------------------------CONTADOR DE INICIO--------------------------------------------------
  let contador = 1;
  let html2 = `<h1 id="Contador">1</h1>`;
  container_Contador.innerHTML = html2;
  let TEXT_Contador = document.getElementById("Contador");
  /* ---------------------FUNCIÓN CONTADOR--------------------- */
  function sumarIntervalo() {
    contador += 1;
    if (contador <= 3) {
      TEXT_Contador.innerText = contador.toString();
    } else {
      clearInterval(intervalo);
      container_Contador.parentNode.removeChild(container_Contador);
    }
  }
  /* ---------------------INTERVALO DE 1 SEGUNDO--------------------- */
  let intervalo = setInterval(sumarIntervalo, 1000);
  /* ---------------------DESHABILITAR LAS OPCIONES--------------------- */
  setTimeout(() => {
    container_juego.innerHTML = html;
    let contenedorRespuestas = document.getElementById("Contenedor_Respuestas");
    let botonesSeleccion = document.querySelectorAll(".Botones_Selección");
    for (let i = 0; i < botonesSeleccion.length; i++) {
      botonesSeleccion[i].disabled = true;
      botonesSeleccion[i].style.pointerEvents = "none" /* "auto" */;
    }
    contenedorRespuestas.style.opacity = "0.7";
  }, 3000);
  /* ---------------------FUNCIÓN REPRODUCTORA--------------------- */
  function Reprodución_UnSegundo(NombreDelArchivo, tiempo) {
    return new Promise((resolve) => {
      let ruta = "../../musica/CANCIONES/CLÁSICO/";
      let nombreArchivo = NombreDelArchivo;
      let extension = ".mp3";
      let archivoMP3 = ruta + nombreArchivo + extension;
      let canción = new Audio(archivoMP3);
      canción.volume = 1;
      let tiempo2;
      if (tiempo >= 2) {
        tiempo2 = 3000;
      } else {
        tiempo2 = 3000;
      }
      setTimeout(() => {
        canción.play();
        setTimeout(() => {
          canción.pause();
        }, 1000);
        resolve();
      }, tiempo2);
    });
  }

  //--------------------------------------------------CARGA DEL JUEGO--------------------------------------------------
  function comenzarJuego(GÉNERO) {
    if (rondaActual < totalRondas) {
      Partida(GÉNERO); // Iniciar la ronda actual
    } else {
      console.log("Puntaje final: " + PuntajeFinal);
    }
  }
  //--------------------------------------------------PARTIDA--------------------------------------------------
  function Partida(género) {
    let temporizador;
    let ClickONo = 0;
    let NumOpciones = [4];
    /* ---------------------RANDOM OPCIONES SELECCIÓN--------------------- */
    for (let i = 0; i < 4; i++) {
      let numeroAleatorio = Math.floor(Math.random() * 9) + 0;
      NumOpciones.push(numeroAleatorio);
    }
    let numeroAleatorio = Math.floor(Math.random() * 4) + 0;

    /* ---------------------INICIO DE REPRODUCCIÓN--------------------- */
    Reprodución_UnSegundo(
      género[OrdenDeCanciones[ContGeneral]],
      ContGeneral
    ).then(() => {
      ContGeneral += 1;
      setTimeout(() => {
        let contenedorRespuestas = document.getElementById(
          "Contenedor_Respuestas"
        );
        let botonesSeleccion = document.querySelectorAll(".Botones_Selección");
        /* ---------------------LUEGO DE LA REPRODUCCIÓN--------------------- */
        /* ---------------------HABILITAR BOTONES--------------------- */
        contenedorRespuestas.style.opacity = "1";
        for (let i = 0; i < botonesSeleccion.length; i++) {
          botonesSeleccion[i].disabled = false;
          botonesSeleccion[i].style.pointerEvents = "auto";
          botonesSeleccion[i].innerText = género[NumOpciones[i]];
        }

        /* ---------------------FUNCIÓN TEMPORIZADOR--------------------- */
        function iniciarTemporizador() {
          temporizador = setTimeout(function () {
            /* ---------------------NO APRETÓ EL BOTÓN--------------------- */
            contenedorRespuestas.style.opacity = "0.7";
            for (let i = 0; i < botonesSeleccion.length; i++) {
              botonesSeleccion[i].disabled = true;
              botonesSeleccion[i].style.pointerEvents = "none";
            }
            ClickONo -= 1;
            botonesSeleccion.forEach(function (boton) {
              boton.removeEventListener("click", botonPresionado);
            });
          }, 5000);
        }
        /* ---------------------SI APRIETA EL BOTÓN--------------------- */
        function botonPresionado() {
          ClickONo += 1;
          clearTimeout(temporizador);
          contenedorRespuestas.style.opacity = "0.7";
          for (let i = 0; i < botonesSeleccion.length; i++) {
            botonesSeleccion[i].disabled = true;
            botonesSeleccion[i].style.pointerEvents = "none";
          }
        }
        /* ---------------------A LA ESPERA DE UN CLICK--------------------- */
        botonesSeleccion.forEach(function (boton) {
          boton.addEventListener("click", botonPresionado);
        });
        /* ---------------------INICIO DE FUNCIÓN TEMPORIZADOR--------------------- */
        iniciarTemporizador();
        /* ---------------------SISTEMA DE PUNTAJE INTERMEDIO--------------------- */
        setTimeout(() => {
          if (ClickONo == -1) {
            PuntajeFinal -= 1;
            FinalPartida = false;
            console.log(PuntajeFinal);
          } else if (ClickONo == 1) {
            PuntajeFinal += 1;
            FinalPartida = false;
            console.log(PuntajeFinal);
          }
          if (ContGeneral == 5) {
            FinalPartida = true;
          }
          rondaActual++;
          comenzarJuego(género);
        }, 3000);
      }, 1000);
    });
  }

  switch (GenElec) {
    case 1:
      comenzarJuego(clásico);
      break;

    case 2:
      break;

    case 3:
      break;

    case 4:
      break;
  }
}
