// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro, es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].


const arrayLettere = ['a', 'b', 'c'];
const arrayNumeri = ['1', '2', '3'];
const arrayFuso = [];
// const arrayFuso = [...arrayLettere, ...arrayNumeri];

function joinArray() {
    for (let i = 0; i < arrayLettere.length; i++){
        arrayFuso.push(arrayLettere[i]);
        arrayFuso.push(arrayNumeri[i]);
    }
        
}


joinArray();
console.log(arrayFuso);