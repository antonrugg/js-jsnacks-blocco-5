// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata(es.Ciao -> oaiC)


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString('ciao');

// console.log(reverseString('ciao'));



const reverseString = (str) => {
    return str.split('').reverse().join('');
}

reverseString('ciao');

console.log(reverseString('ciao'));