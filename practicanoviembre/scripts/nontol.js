let flag = 1;
document.getElementById("ocultar").style.display = "none"

function pageLoad() {
    let bo1 = document.getElementById("boton1");
    let bo2 = document.getElementById("boton2");
    let bo3 = document.getElementById("boton3");
    let bo4 = document.getElementById("boton4");
    let TC = document.getElementById("talento");
    let TUR = document.getElementById("turismo");
    bo1.onclick = lec1;
    bo2.onclick = lec2;
    bo3.onclick = lec3;
    bo4.onclick = lec4;
    TC.onclick = fech;
    TUR.onclick = tur;
}

function tur() {
    if (flag) {
        document.getElementById("ocultar").style.display = "block"
        document.getElementById("fotot").style.display = "none"
        flag = 0;
    } else {
        document.getElementById("ocultar").style.display = "none"
        document.getElementById("fotot").style.display = "block"
        flag = 1;
    }
}

function fech() {
    if (flag) {
        var fecha = new Date();
        var y = fecha.getFullYear();
        let m = fecha.getMonth() + 1;
        let d = fecha.getDate();
        let hora = fecha.getHours();
        let min = fecha.getMinutes();
        let fechahoy = "Fecha: " + d + "/" + m + "/" + y + " Hora actual: " + hora + ":" + min;
        document.getElementById("f").innerHTML = fechahoy;
        flag = 0;
    } else {
        document.getElementById("f").innerHTML = " ";
        flag = 1;
    }
}

function lec1() {
    if (flag) {
        document.getElementById("l1").innerHTML = "Lectura completada";
        flag = 0;
    } else {
        document.getElementById("l1").innerHTML = "Lectura de 3 minutos";
        flag = 1;
    }
}

function lec2() {
    if (flag) {
        document.getElementById("l2").innerHTML = "Lectura completada";
        flag = 0;
    } else {
        document.getElementById("l2").innerHTML = "Lectura de 2 minutos";
        flag = 1;
    }
}

function lec3() {
    if (flag) {
        document.getElementById("l3").innerHTML = "Lectura completada";
        flag = 0;
    } else {
        document.getElementById("l3").innerHTML = "Lectura de 3 minutos";
        flag = 1;
    }
}

function lec4() {
    if (flag) {
        document.getElementById("l4").innerHTML = "Lectura completada";
        flag = 0;
    } else {
        document.getElementById("l4").innerHTML = "Lectura de 5 minutos";
        flag = 1;
    }

}

window.onload = pageLoad;