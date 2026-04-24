
//Callback

let copyright = function getCopyright(name, year, formatter){
                    let copyright = formatter(name,year);
                    return copyright
}

let formatter = function formatter(name,year){
    return name + " | " + year;
}


console.log(resultado("Miguel Angel", 2026,formatter));

// Autoinvocar una funcion

(function(name, year){
    console.log(name,year);
})("Miguel Angel, 2027");