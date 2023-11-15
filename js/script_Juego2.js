let boop = new Audio();
boop.src = "../../musica/boop.mp3";
let bonus = new Audio();
bonus.src = "../../musica/bonus.mp3";
/* ---------------------ARRAYS CANCIONES GÉNERO--------------------- */
const GenElec = parseInt(window.localStorage.getItem("choose"));
console.log(GenElec);
let clásico = [13];
let clásicoLinks = [13];
let pop = [13];
let popLinks = [13];
let rock = [13];
let rockLinks = [13];
let mixto = [13];
let mixtoLinks = [13];
switch (GenElec) {
  case 1:
    clásico[0] = "CZARDAS - MONTI";
    clásicoLinks[0] =
      "https://www.youtube.com/embed/rwLzHNfl0WQ?si=uNsM-cKxQCOkrXb_";
    clásico[1] = "HUNGARIAN DANCE - JOHANNES";
    clásicoLinks[1] =
      "https://www.youtube.com/embed/f5UGmlSWQYs?si=xH3jb6dH2ogFTSch";
    clásico[2] = "LIBERTANGO - PIAZZOLLA";
    clásicoLinks[2] =
      "https://www.youtube.com/embed/vaXNdVTGT0k?si=6Bl9Tr1bt83p4OQD";
    clásico[3] = "SUMMER - VIVALDI";
    clásicoLinks[3] =
      "https://www.youtube.com/embed/RvDt_KtOzbc?si=8Buae4QYlyUFOSUt";
    clásico[4] = "WINTER - VIVALDI";
    clásicoLinks[4] =
      "https://www.youtube.com/embed/ZPdk5GaIDjo?si=49cZZXcErQIr-rVc";
    clásico[5] = "MOONLIGHT SONATA - BEETHOVEN";
    clásicoLinks[5] =
      "https://www.youtube.com/embed/4Tr0otuiQuU?si=M5cZ34JvUCsVrG9H";
    clásico[6] = "LACRIMOSA - MOZART";
    clásicoLinks[6] =
      "https://www.youtube.com/embed/k1-TrAvp_xs?si=O5SZPuL7jvYMKWrx";
    clásico[7] = "CARMEN FANTASY - SARASATE";
    clásicoLinks[7] =
      "https://www.youtube.com/embed/QntYNwxw9B4?si=1dfSBYLTt4mq-2us";
    clásico[8] = "HOWLS MOVING CASTLE - GHIBLI";
    clásicoLinks[8] =
      "https://www.youtube.com/embed/J6qIzKxmW8Y?si=_5s6CCphnFrZGY4I";
    clásico[9] = "LA CAMPANELLA - PAGANINI";
    clásicoLinks[9] =
      "https://www.youtube.com/embed/6ruHDWSNvB8?si=JzJ6ZoI8Wtdzp2b1";
    clásico[10] = "CAPRICE NO. 24 - PAGANINI";
    clásicoLinks[10] =
      "https://www.youtube.com/embed/WMLoBXgPil8?si=Gc8v9pIVmUXfvda6";
    clásico[11] = "DIES IRAE - MOZART";
    clásicoLinks[11] =
      "https://www.youtube.com/embed/X6cogix3cwQ?si=e4lZAMd11g8BeJJ4";
    clásico[12] = "FROM THE NEW WORLD - DVORAK";
    clásicoLinks[12] =
      "https://www.youtube.com/embed/P_1N6_O254g?si=EqnPCbHbFZTmwJHj";
    clásico[13] = "WALTZ NRO.2 - SHOSTAKOVICH";
    clásicoLinks[13] =
      "https://www.youtube.com/embed/mmCnQDUSO4I?si=ynsBIB6Y8v6aNZYv";
    break;
  case 2:
    pop[0] = "BARBIE GIRL - AQUA";
    pop[1] = "BEAT IT - MICHAEL JACKSON";
    pop[2] = "EVERYBODY - BACKSTREET BOYS";
    pop[3] = "EYE OF THE TIGER - SURVIVOR";
    pop[4] = "LETS GROOVE - EWF";
    pop[5] = "NEVER GONNA GIVE YOU UP - ASTLEY";
    pop[6] = "STATIN ALIVE - BEE GEES";
    pop[7] = "SUPERMAN - EMINEM";
    pop[8] = "THRILLER - MICHAEL JACKSON";
    pop[9] = "WAKE ME UP - WHAM!";
    pop[10] = "SMOOTH CRIMINAL - MICHAEL JACKSON";
    pop[11] = "ITS RAINING MEN - TWG";
    pop[12] = "OOPS! I DID IT AGAIN - BRITNEY";
    pop[13] = "GANGSTAS PARADISE - COOLIO";
    popLinks[0] =
      "https://www.youtube.com/embed/ZyhrYis509A?si=vVjKhaXyaLsuFJd4";
    popLinks[1] =
      "https://www.youtube.com/embed/oRdxUFDoQe0?si=r__CCJBkCIOBa5js";
    popLinks[2] =
      "https://www.youtube.com/embed/6M6samPEMpM?si=pzW0y80nkYCzL0KT";
    popLinks[3] =
      "https://www.youtube.com/embed/_qDML_BCju8?si=LkeDBSfbOzlgPeRn";
    popLinks[4] =
      "https://www.youtube.com/embed/Lrle0x_DHBM?si=R83_OmJNmX5Ul_nj";
    popLinks[5] =
      "https://www.youtube.com/embed/dQw4w9WgXcQ?si=mXcdpteaaF5LSYSd";
    popLinks[6] =
      "https://www.youtube.com/embed/E4plB-eSyz8?si=1u2iUMomeHbnZI4l";
    popLinks[7] =
      "https://www.youtube.com/embed/K_8yRH2KPVo?si=oWtLjgzZc0wf--p9";
    popLinks[8] =
      "https://www.youtube.com/embed/sOnqjkJTMaA?si=xQ3rN_Hax3qVV5DH";
    popLinks[9] =
      "https://www.youtube.com/embed/pIgZ7gMze7A?si=2zvFHHJ7IwNDbt7p";
    popLinks[10] =
      "https://www.youtube.com/embed/h_D3VFfhvs4?si=bwI2QmMJcC4BoY-c";
    popLinks[11] =
      "https://www.youtube.com/embed/l5aZJBLAu1E?si=gGdJvPeXmEmCtMh0";
    popLinks[12] =
      "https://www.youtube.com/embed/CduA0TULnow?si=_z7WCZku4W1Hqc7C";
    popLinks[13] =
      "https://www.youtube.com/embed/fPO76Jlnz6c?si=Bs2rA_CDJ-NNx2Wo";

    break;
  case 3:
    rock[0] = "NIGHTRAIN - GNR";
    rock[1] = "WELCOME TO THE JUNGLE - GNR";
    rock[2] = "THUNDERSTRUCK - ACDC";
    rock[3] = "HIGHWAY TO HELL - ACDC";
    rock[4] = "BACK IN BLACK - ACDC";
    rock[5] = "PARANOID - BLACK SABBATH";
    rock[6] = "JAILHOUSE ROCK - ELVIS";
    rock[7] = "EVERY BREATH YOU TAKE - POLICE";
    rock[8] = "GIVEN UP - LINKIN PARK";
    rock[9] = "KICKSTART MY HEART - MÖTLEY CRÜE";
    rock[10] = "DREAM ON - AEROSMITH";
    rock[11] = "HOTEL CALIFORNIA - EAGLES";
    rock[12] = "CUM AND FEEL THE NOIZE - RIOT";
    rock[13] = "CRAZY TRAIN - OZZY OSBOURNE";

    rockLinks[0] =
      "https://www.youtube.com/embed/aujKauhYsgA?si=KyzaqRjgXvGfki3P";
    rockLinks[1] =
      "https://www.youtube.com/embed/o1tj2zJ2Wvg?si=GjQZxJcpIjZWdtus";
    rockLinks[2] =
      "https://www.youtube.com/embed/lhg9bYNLvOg?si=BN8PCax6MqlpWIr2";
    rockLinks[3] =
      "https://www.youtube.com/embed/UCskpE9KGQU?si=JBZA3M2pNjnwpT-e";
    rockLinks[4] =
      "https://www.youtube.com/embed/9vWNauaZAgg?si=VjJYaE6aIxW22Jvj";
    rockLinks[5] =
      "https://www.youtube.com/embed/m7nwbJLO9qo?si=Z-5cySJqmU9GG58d";
    rockLinks[6] =
      "https://www.youtube.com/embed/PpsUOOfb-vE?si=XWYA5C_oNupXJ6Kt";
    rockLinks[7] =
      "https://www.youtube.com/embed/OMOGaugKpzs?si=dbDF3NsGUFFrb2Vx";
    rockLinks[8] =
      "https://www.youtube.com/embed/D93vYwuMeUw?si=2YF6NTdlxWMvI8a0";
    rockLinks[9] =
      "https://www.youtube.com/embed/mVurA44hwiw?si=MeIUt7uy8eL7jmOS";
    rockLinks[10] =
      "https://www.youtube.com/embed/89dGC8de0CA?si=-N6qb89jK2s_U7gx";
    rockLinks[11] =
      "https://www.youtube.com/embed/BciS5krYL80?si=V-hZnhfrHBG6mvJJ";
    rockLinks[12] =
      "https://www.youtube.com/embed/YQ5G8m2XOZg?si=OMLJCIN0ylvUogyW";
    rockLinks[13] =
      "https://www.youtube.com/embed/Djrl6fu8myo?si=u8Dz4QnvqFsMwDz5";
    break;
  case 4:
    mixto[0] = "CARELESS WHISPER - GEORGE MICHAEL";
    mixto[1] = "BET ON IT - TROY VOLTON";
    mixto[2] = "SKYFALL - ADELLE";
    mixto[3] = "IM JUST KEN - RYAN GOSLING";
    mixto[4] = "BUTTER - BTS";
    mixto[5] = "UPTOWN FUNK - BRUNO MARS";
    mixto[6] = "GET LUCKY - PHARRELL WILIAMS";
    mixto[7] = "CIUDAD MÁGICA - TAN BIONICA";
    mixto[8] = "LOVE GUN - KISS";
    mixto[9] = "FEELING GOOD - MICHAEL BUBLÉ";
    mixto[10] = "SWAY - MICHAEL BUBLÉ";
    mixto[11] = "FLY ME TO THE MOON - FRANK SINATRA";
    mixto[12] = "ENTER SANDMAN - METALLICA";
    mixto[13] = "AMOR SALVAJE - CHAQUEÑO PALAVECINO";

    mixtoLinks[0] =
      "https://www.youtube.com/embed/izGwDsrQ1eQ?si=qGyWRT4O3COah-nY";
    mixtoLinks[1] =
      "https://www.youtube.com/embed/k-t4vqd534Y?si=Fq__-7XGiJlwK-ob";
    mixtoLinks[2] =
      "https://www.youtube.com/embed/sZrTJesvJeo?si=GwtSK5OGdf0bes-f";
    mixtoLinks[3] =
      "https://www.youtube.com/embed/wwux9KiBMjE?si=oB17ZN-jKqlfDr4e";
    mixtoLinks[4] =
      "https://www.youtube.com/embed/WMweEpGlu_U?si=4RZlScuPw_6lOiZ9";
    mixtoLinks[5] =
      "https://www.youtube.com/embed/OPf0YbXqDm0?si=z0ug9xOD9A-FePTS";
    mixtoLinks[6] =
      "https://www.youtube.com/embed/uxYwAjUmEzA?si=dbW0rWmzHI9rjaMe";
    mixtoLinks[7] =
      "https://www.youtube.com/embed/V419yO6FeIU?si=UYrvEhfKD89yMU_6";
    mixtoLinks[8] =
      "https://www.youtube.com/embed/FhO_jnKl4pk?si=GoFObjMwdyDB4xI9";
    mixtoLinks[9] =
      "https://www.youtube.com/embed/Edwsf-8F3sI?si=ksR2RxT6HsLrVOP8";
    mixtoLinks[10] =
      "https://www.youtube.com/embed/a90tZJHBklk?si=WuUtn1dc1Ja5fzsC";
    mixtoLinks[11] =
      "https://www.youtube.com/embed/ZEcqHA7dbwM?si=t77Y8PJzCMQ9ERw9";
    mixtoLinks[12] =
      "https://www.youtube.com/embed/XZuM4zFg-60?si=7Gw2auBo9z3kFJ2K";
    mixtoLinks[13] =
      "https://www.youtube.com/embed/3S10cOVhrCI?si=0DD4vluyjvzoQt4p";

    break;
}
/* ---------------------DECLARACIÓN DE VARIABLES--------------------- */
const totalRondas = 5;
let rondaActual = 0; //CONTADOR DE RONDAS
let cancionesPartida = []; //CANCIONES POR PARTIDA
let cancionesAElegir = [3]; //PARA BOTONES DE SELECCIÓN
let cancioncorrecta;
let puntaje = 0;
let contador = 1; //CUENTA ATRÁS
let temporizador;
let contadorRonda = 0;
let container_menúArranque = document.getElementById("CONT_JuegoArranque");
let container_juego = document.getElementById("Juego");
let BTN_Atrás = document.getElementById("BTN_Atrás");
let container_Contador = document.getElementById("CONT_Contador");

let divPausa = document.createElement("div");
divPausa.id = "DivPausa";
// Crear el h1
let h1 = document.createElement("h1");
h1.id = "GanastePerdiste";
h1.textContent = "¡UN PUNTO MÁS!";
divPausa.appendChild(h1);
// Crear el h2
let h2 = document.createElement("h2");
h2.id = "Puntaje";
h2.textContent = "PUNTAJE: 1";
divPausa.appendChild(h2);
// Crear el iframe
let iframe = document.createElement("iframe");
iframe.id = "VideoYoutube";
iframe.src = "";
iframe.title = "YouTube video player";
iframe.frameBorder = "0";
iframe.allow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.allowFullscreen = true;
divPausa.appendChild(iframe);
// Crear el div para los botones
let divBotones = document.createElement("div");
divBotones.id = "DivBotones";
// Crear el botón Atrás
let botonAtras = document.createElement("button");
botonAtras.className = "AtrásSiguiente";
botonAtras.id = "Atrás";
botonAtras.textContent = "ATRÁS";
divBotones.appendChild(botonAtras);
// Crear el botón Siguiente
let botonSiguiente = document.createElement("button");
botonSiguiente.className = "AtrásSiguiente";
botonSiguiente.id = "Siguiente";
botonSiguiente.textContent = "SEGUIR JUGANDO";
divBotones.appendChild(botonSiguiente);
divPausa.appendChild(divBotones);
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
        <img class="PAUSA" id="PAUSA" style="display: none;" src="../../img/LENTO.svg" alt="">
        </div>
        <div class="DIV_PAUSAPRE" > 
        <img class="PAUSA" src="../../img/RÁPIDO.svg" alt="">
        </div>
        <div class="DIV_PAUSAPRE" > 
        <img class="PAUSA" src="../../img/Interrogación.svg" alt="">
        </div>
      </div>`;
/* ------PEQUEÑA LÓGICA BOTÓN ATRÁS----- */
BTN_Atrás.onclick = () => {
  window.location.href = "../ElecJuego.html";
};

/* ---------------------ELEGIR CANCIONES DE LA PARTIDA--------------------- */
function RandomCancionesPartida() {
  cancionesPartida = [];
  let numeroAleatorio = 0;
  for (let i = 0; i < totalRondas; i++) {
    do {
      numeroAleatorio = Math.floor(Math.random() * 13) + 0;
    } while (cancionesPartida.includes(numeroAleatorio));
    cancionesPartida.push(numeroAleatorio);
  }
  console.log(cancionesPartida);
}
/* ---------------------DESACTIVADOR DE BOTONES SELECCIÓN--------------------- */
function DesactivarSelección() {
  let botonesSeleccion = document.querySelectorAll(".Botones_Selección");
  let contenedorRespuestas = document.getElementById("Contenedor_Respuestas");
  for (let i = 0; i < botonesSeleccion.length; i++) {
    botonesSeleccion[i].disabled = true;
    botonesSeleccion[i].style.pointerEvents = "none";
  }
  contenedorRespuestas.style.opacity = "0.7";
}
/* ---------------------ACTIVADOR DE BOTONES SELECCIÓN--------------------- */
function ActivarSelección(GÉNERO) {
  let botonesSeleccion = document.querySelectorAll(".Botones_Selección");
  let contenedorRespuestas = document.getElementById("Contenedor_Respuestas");
  contenedorRespuestas.style.opacity = "1";
  for (let i = 0; i < botonesSeleccion.length; i++) {
    botonesSeleccion[i].disabled = false;
    botonesSeleccion[i].style.pointerEvents = "auto";
    botonesSeleccion[i].innerText = GÉNERO[cancionesAElegir[i]];
  }
}
/* ----------------------1s REPRODUCCIÓN DE LA CANCIÓN---------------------- */
async function Reprodución_UnSegundo(NombreDelArchivo) {
  return new Promise((resolve) => {
    let ruta;
    switch (GenElec) {
      case 1:
        ruta = "../../musica/CANCIONES/CLÁSICO/";
        break;
      case 2:
        ruta = "../../musica/CANCIONES/POP/";
        break;
      case 3:
        ruta = "../../musica/CANCIONES/ROCK/";
        break;
      case 4:
        ruta = "../../musica/CANCIONES/MIXTO/";
        break;
    }

    let nombreArchivo = NombreDelArchivo;
    let extension = ".mp3";
    let archivoMP3 = ruta + nombreArchivo + extension;
    let canción = new Audio(archivoMP3);
    canción.volume = 1;

    canción.play();
    setTimeout(() => {
      canción.pause();
      resolve();
    }, 1000);
  });
}
/* ----------------------10s REPRODUCCIÓN DE LA CANCIÓN---------------------- */
let canción;
async function Reprodución_DiezSegundos(NombreDelArchivo) {
  let ruta;
  switch (GenElec) {
    case 1:
      ruta = "../../musica/CANCIONES/CLÁSICO/";
      break;
    case 2:
      ruta = "../../musica/CANCIONES/POP/";
      break;
    case 3:
      ruta = "../../musica/CANCIONES/ROCK/";
      break;
    case 4:
      ruta = "../../musica/CANCIONES/MIXTO/";
      break;
  }

  let nombreArchivo = NombreDelArchivo;
  let extension = ".mp3";
  let archivoMP3 = ruta + nombreArchivo + extension;
  canción = new Audio(archivoMP3);
  canción.volume = 1;

  canción.play();
  setTimeout(() => {
    canción.pause();
  }, 10000);
}
/* ---------------------RANDOM OPCIONES SELECCIÓN--------------------- */
function RandomOpciones(GÉNERO) {
  cancionesAElegir = [];
  let SeleccionAleatorio = 0;
  let EspacioCorrecto = Math.floor(Math.random() * 3) + 0;
  for (let i = 0; i < 4; i++) {
    if (i == EspacioCorrecto) {
      cancionesAElegir.push(cancionesPartida[rondaActual]);
    } else {
      do {
        SeleccionAleatorio = Math.floor(Math.random() * 13) + 0;
      } while (cancionesAElegir.includes(SeleccionAleatorio));
      cancionesAElegir.push(SeleccionAleatorio);
    }
  }
  cancioncorrecta = GÉNERO[cancionesAElegir[EspacioCorrecto]];
}

/* ---------------------SI PRESIONA EL BOTÓN--------------------- */
function botonPresionado(boton, género) {
  console.log("Apretó el botón");
  clearTimeout(temporizador);
  DesactivarSelección();
  if (boton.textContent == cancioncorrecta) {
    puntaje += 1;
    h1.textContent = "¡CANCIÓN CORRECTA!";
    h2.textContent = `PUNTAJE:    ${puntaje}`;
  } else {
    puntaje -= 1;
    h1.textContent = "¡CANCIÓN INCORRECTA!";
    h2.textContent = `PUNTAJE:    ${puntaje}`;
  }
  let index = cancionesPartida[rondaActual];
  switch (GenElec) {
    case 1:
      iframe.src = clásicoLinks[index];
      break;
    case 2:
      iframe.src = popLinks[index];
      break;
    case 3:
      iframe.src = rockLinks[index];
      break;
    case 4:
      iframe.src = mixtoLinks[index];
      break;
  }
  //----------Menú de puntos.
  if (rondaActual == 4) {
    divBotones.removeChild(botonSiguiente);
  }
  container_juego.appendChild(divPausa);
  Reprodución_DiezSegundos(género[cancionesPartida[rondaActual]]);
  contadorRonda = 0;
  botonSiguiente.addEventListener("click", function () {
    if (contadorRonda == 0) {
      rondaActual++;
      console.log("Ronda actual: " + rondaActual);
      siguienteRonda(género);
      contadorRonda = 1;
      container_juego.removeChild(divPausa);
      canción.pause();
    }
  });
  botonAtras.addEventListener("click", function () {
    window.location.href = "../../html/ElecJuego.html";
  });
}
/* ---------------------TEMPORIZADOR--------------------- */
let contadorTemporizador = 0;
let DivSiguiente = document.createElement("div");
async function iniciarTemporizador(género) {
  let botonesSeleccion = document.querySelectorAll(".Botones_Selección");
  let botónPresionado = false;
  contadorTemporizador = 0;
  botonesSeleccion.forEach(function (boton) {
    boton.addEventListener("click", function () {
      botónPresionado = true;
      if (contadorTemporizador == 0) {
        botonPresionado(boton, género);
      }
      contadorTemporizador = 1;
    });
  });
  temporizador = setTimeout(function () {
    if (!botónPresionado) {
      /* ----NO APRETÓ EL BOTÓN---- */
      console.log("No apretó el botón, puntaje: " + puntaje);
      DesactivarSelección();
      //----------Menú de puntos.
      h1.textContent = "¡NO PRESIONÓ NINGUNA!";
      h2.textContent = `PUNTAJE: ${puntaje}`;
      console.log(rondaActual);
      if (rondaActual == 4) {
        divBotones.removeChild(botonSiguiente);
      }
      container_juego.appendChild(divPausa);
      Reprodución_DiezSegundos(género[cancionesPartida[rondaActual]]);
      contadorRonda = 0;
      botonSiguiente.addEventListener("click", function () {
        if (contadorRonda == 0) {
          rondaActual++;
          console.log("Ronda actual: " + rondaActual);
          siguienteRonda(género);
          contadorRonda = 1;
          container_juego.removeChild(divPausa);
          canción.pause();
        }
      });
      botonAtras.addEventListener("click", function () {
        window.location.href = "../../html/ElecJuego.html";
      });
      clearTimeout(temporizador);
    }
  }, 5000);
}
/* ----------------------PARTIDA---------------------- */
async function Ronda(género) {
  await Reprodución_UnSegundo(género[cancionesPartida[rondaActual]]).then(
    () => {
      console.log("Nueva Ronda");
      RandomOpciones(género);
      ActivarSelección(género);
      iniciarTemporizador(género);
    }
  );
}
/* ---------------------PASAR A LA SIGUIENTE PARTIDA---------------------- */
function siguienteRonda(GÉNERO) {
  if (rondaActual < totalRondas) {
    Ronda(GÉNERO);
  } else {
    console.log("Puntaje final: " + puntaje);
  }
}
/* ---------------------CONTADOR PRE-PARTIDA--------------------- */
let intervalo;
function CuentaAtrás() {
  contador += 1;
  if (contador <= 3) {
    let TEXT_Contador = document.getElementById("Contador");
    TEXT_Contador.innerText = contador.toString();
  } else {
    clearInterval(intervalo);
    container_Contador.parentNode.removeChild(container_Contador);
    container_juego.innerHTML = html;
    let elementoPausa = document.getElementById("PAUSA");
    elementoPausa.style.display = "block";
    DesactivarSelección();
    RandomCancionesPartida();
    switch (GenElec) {
      case 1:
        siguienteRonda(clásico);
        break;
      case 2:
        siguienteRonda(pop);
        break;
      case 3:
        siguienteRonda(rock);
        break;
      case 4:
        siguienteRonda(mixto);
        break;
    }
  }
}
/* ---------------------AGREGAR EL HTML--------------------- */
function agregarHTML() {
  /* ---------------------ELIMINAR EL MENÚ DE ARRANQUE---------------------- */
  container_menúArranque.parentNode.removeChild(container_menúArranque);
  /* ----------------------CONTADOR DE INICIO---------------------- */
  let html2 = `<h1 id="Contador">1</h1>`;
  container_Contador.innerHTML = html2;
  intervalo = setInterval(CuentaAtrás, 1000);
}
