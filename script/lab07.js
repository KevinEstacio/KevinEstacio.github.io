let flag = 1;

function pageLoad() {

    let colorear = document.getElementById("colorear");
    let extraer = document.getElementById("extraerr");
    colorear.onclick = cambiarColor;
    extraer.onclick = extraerDatos;
}

function extraerDatos() {
    let nom = document.getElementById("nombre").value;
    let fech = document.getElementById("fecha").value;
    let fechanacimiento = new Date(fech);
    let anonacimiento = fechanacimiento.getFullYear();
    let fechaactual = new Date();
    let anoactual = fechaactual.getFullYear();
    let edad = anoactual - anonacimiento;
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];


    let m = fechanacimiento.getMonth();


    let fm = nom.split(" ");
    if (fm.length >= 3 && !isNaN(edad)) {
        let apa = fm[0].slice();
        let ama = fm[1].slice();
        let nom1 = fm[2].slice();
        document.getElementById("ap").innerHTML = apa;
        document.getElementById("am").innerHTML = ama;
        document.getElementById("edad").innerHTML = edad;
        document.getElementById("mes").innerHTML = meses[m];
        if (fm.length > 3) {
            let nom2 = fm[3].slice();
            document.getElementById("nom").innerHTML = nom1 + " " + nom2;
        } else {
            document.getElementById("nom").innerHTML = nom1;
            document.getElementById("lp").innerHTML = apa.length + ama.length;
        }
    } else {

        alert("Faltan Datos")
    }






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