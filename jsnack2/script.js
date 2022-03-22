// Crea 10 oggetti che rappresentano una zucchina.Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const arrayZucchine = [
    {
        varieta: 'nera',
        peso: 0.350,
        lunghezza: 0.13,
    },
    {
        varieta: 'romanesca',
        peso: 0.341,
        lunghezza: 0.18,
    },
    {
        varieta: 'fiorentina',
        peso: 0.351,
        lunghezza: 0.11,
    },
    {
        varieta: 'napoletana',
        peso: 0.374,
        lunghezza: 0.20,
    },
    {
        varieta: 'tonda',
        peso: 0.310,
        lunghezza: 0.23,
    },
    {
        varieta: 'trombetta',
        peso: 0.362,
        lunghezza: 0.16,
    },
    {
        varieta: 'patisson',
        peso: 0.320,
        lunghezza: 0.14,
    },
    {
        varieta: 'gialla',
        peso: 0.333,
        lunghezza: 0.17,
    },
    {
        varieta: 'friulana',
        peso: 0.374,
        lunghezza: 0.12,
    },
    {
        varieta: 'crookneck',
        peso: 0.373,
        lunghezza: 0.49,
    }
]


const zucchineCorte = [];
const zucchineLunghe = [];

function separatoreZucchine() {
    
    for (let i = 0; i < arrayZucchine.length; i++) {
        const zucchina = arrayZucchine[i];
        if (zucchina.lunghezza > 0.15) {
            zucchineLunghe.push(zucchina);
        } else {
            zucchineCorte.push(zucchina);
        }
    }

    console.table(zucchineCorte);
    console.table(zucchineLunghe);
}


function sommaPesoZucchine(zucchineCorte) {
    let sum = 0;
    for (let i = 0; i < zucchineCorte.length; i++) {
        const zucchina = zucchineCorte[i];
        sum += zucchina.peso;
        console.log(zucchina.peso);

    }

    console.log(`somma del peso delle zucchine corte è: ${sum} kg`);
    return sum;


}

function sommaPesoZucchine(zucchineLunghe) {
    let sum = 0;
    for (let i = 0; i < zucchineLunghe.length; i++) {
        const zucchina = zucchineLunghe[i];
        sum += zucchina.peso;
        console.log(zucchina.peso);

    }

    console.log(`somma del peso delle zucchine lunghe è: ${sum} kg`);
    return sum;


}

separatoreZucchine();
sommaPesoZucchine(zucchineCorte);
sommaPesoZucchine(zucchineLunghe);