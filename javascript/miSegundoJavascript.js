let myName = 'Marisol';
let edad = 7;
const pi = 3.1416;

console.log(myName);
console.log(typeof(myName));
console.log(typeof(edad));

let stredad = String(edad); // He realizado la operacion de Casting

console.log('he cambiado el tipo de variable');
console.log(stredad);
console.log(typeof(stredad));



function saludar(){
        console.log('Hola soy Miguel Ángel 2026');
        //document.write('Hola soy Miguel Ángel 2026');
        // alert('Hola soy Miguel Ángel 2026');
};

//creamos una funcion que los sume
function sumar(a,b){ //a y b son parametros
        return a + b; //el retuen sirve para que la funcion obtenga un valor, en este caso, el se la suma
}





saludar();
//document.write('<br> la suma total es: /n '+sumar(num1,num2));
//document.write(`<br> la suma total es: /n ${sumar(num1,num2)}`);
/**/

//declaramos las variables num1 y num2 
let num1 = 1
let num2 = 2
suma = sumar(num1,num2)
console.log(`La suma ${num1} y \n${num2} es:${suma}`); // \n solo en console.log y en alert


//FUNCIONES AutoInvocadas

//AutoInvocar funciones

(function(num1,num2 = 2,num3)
{
        console.log(num1 + num2+num3)
}(4,undefined,10));