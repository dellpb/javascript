import somar from './somar.js';
import dividir from './dividir.js';


resultadosoma = somar(3,5);
resultadodivisao = dividir(10,2);


function somar (numero01, numero02){

var resultado;

resultado = numero01 + numero02;

return resultado;

}   

export default somar;


