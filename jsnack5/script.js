// Scrivi una funzione che accetti tre argomenti: un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo quanto
// il numero di elementi dell’array).La funzione ritornerà un nuovo array con i valori
//  che hanno la posizione compresa tra “a” e “b”


let myArray = ['1', '2', '3', '4', '5'];
function myFunction(myArray, num1, num2) {
    num2 = myArray.length - 1;
    num1 = num1 + 1;
    let myNewArray = [];
    myNewArray = myArray.slice(num1, num2);
    
    
    
    return myNewArray;
}


let range = myFunction(myArray, 1, 5);

console.log(range);

