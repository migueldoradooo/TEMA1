
//Callback

// let copyright = function getCopyright(name, year, formatter){
//                     let copyright = formatter(name,year);
//                     return copyright
// }

// let formatter = function formatter(name,year){
//     return name + " | " + year;
// }


// console.log(resultado("Miguel Angel", 2026,formatter));

// // Autoinvocar una funcion

// (function(name, year){
//     console.log(name,year);
// })("Miguel Angel, 2027");

let hazPizza;
let company ="OpenWebinars";



const year = 2023;
if (hazPizza == false){
    console.log('No tengo Pizza')
}
else if(hazPizza == true){
    console.log('tengo Pizza');
}
else{
    console.log(hazPizza)
}

if (year >= 2021 || year == false){
    console.log('Ok')
}

function getAcademy(){
    let format = 'From' + company
    if (!year){
        let format = 'Make it' + company
        return format
    }
    return format + 'in' + year
}

function PrintName(){
    let name = 'Armando';
    let surname = 'Torres';

    if(name === 'Armando'){
        console.log(surname);

    }
}

PrintName();
    
if(true){
    let text = 'un texto cualquiera';
    console.log(text);
}

 