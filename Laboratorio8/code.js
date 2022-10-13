function papitas(frase){
    if(typeof frase != 'string'){
        throw TypeError('El argunmento debe ser una cadena de caracteres');
    }

    let conteo = {};

    frase.replace(/\S/g, function(p) {
        conteo[p] = (isNaN(conteo[p]) ? 1 : conteo[p] + 1);
    });
    return conteo;
}
    console.log(papitas('moscow mule'));
