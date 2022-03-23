// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro, es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].


const arrayLettere = ['a', 'b', 'c'];
const arrayNumeri = ['1', '2', '3'];
const arrayFuso = [];


function joinArray() {
    for (let i = 0; i < arrayLettere.length; i++){
        arrayFuso.push(arrayLettere[i]);
        arrayFuso.push(arrayNumeri[i]);
        //push puo' pushare piu' di un elemento usando la virgola
        // arrayFuso.push(arrayLettere[i], arrayNumeri[i]);
    }
    return arrayFuso;     
}


joinArray();
console.log(arrayFuso);