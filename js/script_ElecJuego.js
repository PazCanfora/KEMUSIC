
let divClassic = document.getElementById("DIV_Classic");
let divPop = document.getElementById("DIV_Pop");
let divRock = document.getElementById("DIV_Rock");
let divMixto = document.getElementById("DIV_Mixto");

divClassic.onclick = () => {
    window.localStorage.setItem('choose', '1');
    window.location.href = "./JUEGOS/Classic.html";
};
divPop.onclick = () => {
    window.localStorage.setItem('choose', '2');
    window.location.href = "./JUEGOS/Pop.html";
};
divRock.onclick = () => {
    window.localStorage.setItem('choose', '3');
    window.location.href = "./JUEGOS/Rock.html";
};
divMixto.onclick = () => {
    window.localStorage.setItem('choose', '4');
    window.location.href = "./JUEGOS/Mixto.html";
};


