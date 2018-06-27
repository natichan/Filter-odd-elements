function filterOddElements(arr) { 
    // creo una nueva variable de los impares para guardar mi resultado 
        let impar = arr.filter(element => element %2 == 1);
        // si quiero que me retorne los pares cambio el 1 por 0
        return impar;
}

console.log(filterOddElements([69, 10, 6, 8, 22]));