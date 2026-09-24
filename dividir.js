function dividir(numero01, numero02) {

var resultado;

if (numero02 !== 0) {
    resultado = numero01 / numero02;
    return resultado;
} else {
    console.log("Não é possível dividir por zero");
}   
}
export default dividir;


