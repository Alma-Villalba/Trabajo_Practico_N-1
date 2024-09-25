/*Ejercicio:
 ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂
 
 Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
 Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de Sabor, 
 Presentación y Dificultad para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. 
 Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos
  o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).
 
 ## Funciones a implementar:
 calcularPuntaje(sabor, presentacion, dificultad):
 Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números
  (el puntaje total del pastel).
 
 determinarGanador():
 Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones
  de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.
 
 *Si lo consideran necesario, pueden implementar funciones extra.
NOTA AL PIE: Si lo resuelven, genial. Si no lo resuelven, queremos evaluar el proceso de pensamiento que siguen.
 Es importante comprender el problema antes de escribir el código. En caso de que no lo terminen, está muy bien enviar 
 lo que hayan hecho y comentar cómo llegaron al código. Incluso si no escriben una sola línea de código, también valoraremos
  que escriban en lenguaje natural o en pseudocódigo una aproximación al problema y los pasos necesarios para resolverlo. 
  Obviamente, el miércoles próximo arrancaremos resolviéndolo en clase.*/
  import * as rs from "readline-sync";

  function calcularPuntaje( sabor: number, presentacion: number, dificultad: number): number {
    return sabor + presentacion + dificultad;
  }
  //la funcion calcularPuntaje va a recibir los 3 puntajes y devuelve la suma.
  
  function determinarGanador() {
    const cantConcursantes: number =rs.questionInt("ingrese la cantidad de participantes: ");
    let puntajeMayor = 0;
    let ganador = -1; 
    
    for(let concursante = 1; concursante <= cantConcursantes; concursante++) {
        console.log(`concursante ${concursante}`); //recorre cada participante, del 1 hasta el numero de concursantes.
        let sabor = rs.questionInt("ingrese un puntaje del 1 al 5 para el sabor: ");
        let presentacion = rs.questionInt("ingrese un puntaje del 1 al 5 para la presentacion: ");
        let dificultad = rs.questionInt("ingrese un puntaje del 1 al 5 para la dificultad: ");

        let puntajeTotal = calcularPuntaje(sabor, presentacion, dificultad); //llamo a la funcion calcular puntaje para que me de el puntaje total de esa torta.
        console.log (`el puntaje total de la torta ${concursante} es: ${puntajeTotal}`);
        
        if (puntajeTotal > puntajeMayor) {
            puntajeMayor = puntajeTotal;
            ganador = concursante;
        }//se van actualizando el puntajeMayor y el ganador.
    }
        console.log(`el ganador es el concursante ${ganador} con un puntaje de ${puntajeMayor}`);//muestra el numero del concursante ganador y su puntaje.
    }
  

  determinarGanador();//llamo a la funcion para iniciar el proceso.

  //no me di cuenta para hecer el empate.
