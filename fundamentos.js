/*Ciclo de un triángulo
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo1:

#
##
###
####
#####
######
#######*/

console.log('Ciclo de un triángulo');
for(let linea = "#"; linea.length < 8; linea +="#"){
    console.log(linea);
}

/*FizzBuzz
Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).

(Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).*/

console.log('FizzBuzz');

for(let i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }          
}

/*Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #*/
console.log("tablero ajedrez");
//aqui no existen matriz es un arreglo que contiene mas arreglos    
/*let matriz = [
    ['0', '1', '2', '3'],
    ['1', '7', '3'],
    ['2', '3', '4']
  ];
  console.log(matriz);
  console.log(matriz[1][1]);*/

let linea = "";

for(let r = 0; r < 8; r++){ //con este for repito la linea 8 veces
    if(r % 2 == 0){         // aqui digo q si es par agregue un espacio antes para q genere la diferencia de la linea
        linea += " ";
    }
    for(let i = 0; i < 8; i++){  // con este for creo una linea q cuando sea par deje un espacio y si no un #
        if(i % 2 == 0){
            linea += " ";
        } else {
            linea += "#";
        }    
    }    
    linea += "\n"; //agrego un salto de linea luego de terminar la primera fila
}

console.log(linea);

