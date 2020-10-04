let flag = 1;

function pageLoad() {
    let colorear = document.getElementById("colorear");
    colorear.onclick = cambiarColor;
}

function cambiarColor() {

    if (flag) {
        document.getElementById("1").className = "rojo";
        document.getElementById("2").className = "rojo";
        document.getElementById("3").className = "rojo";
        document.getElementById("4").className = "rojo";
        document.getElementById("5").className = "rojo";
        document.getElementById("colorear").className = "azul";
        document.getElementById("6").className = "azul";
        document.getElementById("7").className = "azul";
        document.getElementById("8").className = "azul";
        flag = 0;
    } else {
        document.getElementById("1").className = "azul";
        document.getElementById("2").className = "azul";
        document.getElementById("3").className = "azul";
        document.getElementById("4").className = "azul";
        document.getElementById("5").className = "azul";
        document.getElementById("colorear").className = "rojo";
        document.getElementById("6").className = "rojo";
        document.getElementById("7").className = "rojo";
        document.getElementById("8").className = "rojo";
        flag = 1;
    }
}
window.onload = pageLoad;