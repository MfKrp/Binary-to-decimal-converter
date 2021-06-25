//Captura de los valores y los botones
const botonConversion = document.querySelector(".conversor"); //boton para realizar las conversiones
const cajaResultado = document.querySelector("#resultado");

//eventos
botonConversion.addEventListener('click', () => {
    let numeroBinario = document.querySelector("#campo-ingreso").value;//captura el valor del campo de ingreso cuando se haga un click en el
    let numeroDecimal = 0;
    numeroBinario = numeroBinario.toString();
    if (comprobarBinario(numeroBinario)) {
        numeroDecimal = pasarADecimal(numeroBinario);
        cajaResultado.style.backgroundColor = 'lime';
        cajaResultado.firstChild.innerHTML = numeroDecimal;
    } else {
        cajaResultado.style.backgroundColor = 'red';
        cajaResultado.style.color = 'white';
        cajaResultado.firstChild.innerHTML = 'El numero que introdujo es el incorrecto, porfavor ingrese un binario';
    }
});

//funciones
//funcion que comprueba que el numero que se esta escribiendo en el campo de entrada de texto es un numero binario
function comprobarBinario (cadenaBinaria) {
    for (let i = 0; i < cadenaBinaria.length; i++) { //se comprueba que todos los elementos en la cadena son 0 o 1, de otra manera se devuelve un false
        if (cadenaBinaria[i] !== '0' && cadenaBinaria[i] !== '1') {
            return false;
        }
    }
    return true;
}

function pasarADecimal(cadenaBinaria) {
    //para convertir un numero de binario a decimal es necesario multiplicarlo por las potencias de 2 desde 0 hasta la cantidad de elementos del numero binario, luego sumar todos esos resultados
    //Idea de Algoritmo
    //1-Meter los elementos de la cadena en un array
    let binarioReversa = [];
    let productosCon2 = [];
    let resultadoFinal = 0;
    for (let i = 0; i < cadenaBinaria.length; i++) {
        binarioReversa.push(cadenaBinaria[i]);
    }
    //2- Dar vuelta el arreglo, para poder realizar los productos con las potencias de 2
    binarioReversa = binarioReversa.reverse();
    //3- Convertir los elementos en numeros enteros para realizar los correspondientes productos, multiplicarlos y despues meterlos en otro arreglo en el que se sumaran entre ellos al final
    for (let x = 0; x < binarioReversa.length; x++) {
        productosCon2.push(parseInt(binarioReversa[x]) * (2 ** x)); //Para exponenciar un numero a otro, se puede usar el objeto Math con el metodo .pow(base, exponente). Existe el operador **, que es el de exponenciacion
    }
    //4- Sumar todos los elementos del array
    for (let z = 0; z < productosCon2.length; z++) {
        resultadoFinal = resultadoFinal + productosCon2[z];
    }
    //5-Se retorna el resultado de la operacion
    return resultadoFinal;
}