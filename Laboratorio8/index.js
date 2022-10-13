const txtletras = document.getElementById("letras")
const btnCalcular = document.getElementById("papitas")
const btnLimpiar = document.getElementById("limpiar")

document.getElementById("limpiar").style.visibility = "hidden";

btnCalcular.addEventListener('click', papitas)
btnLimpiar.addEventListener('click', limpiar)

function papitas(){
    const letras = txtletras.value.trim().toLowerCase();
    if(typeof letras != 'string'){
    }
    let conteo = {};
    letras.toString().replace(/\S/g, function(p) {
        conteo[p] = (isNaN(conteo[p]) ? 1 : conteo[p] + 1);
    });
    document.getElementById("limpiar").style.visibility = "visible";
    var r;
    var c;
    document.getElementById('respuesta').innerHTML = Object.keys(conteo) + ",";
    document.getElementById('cantidad').innerHTML = Object.values(conteo);
    r = document.getElementById('respuesta').innerHTML;
    c = document.getElementById('cantidad').innerHTML;
    document.getElementById('respuesta').innerHTML = r.replace(/,/g,": ")
    document.getElementById('cantidad').innerHTML = c.replace(/,/g," ")
    document.getElementById('tletras').innerHTML = "Letras";
    return conteo;
    }
    //  console.log(conteo)  

function limpiar() {
    document.getElementById("limpiar").style.visibility = "hidden";
    document.getElementById("letras").value = "";
    document.getElementById('cantidad').innerHTML = "";
    document.getElementById('respuesta').innerHTML = "";
    document.getElementById('tletras').innerHTML = "";
}
