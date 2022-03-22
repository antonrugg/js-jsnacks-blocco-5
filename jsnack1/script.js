// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.Calcola quanto pesano tutte le zucchine.

const arrayZucchine = [
    {
        varieta: 'nera',
        peso: 0.350,
        lunghezza: 0.31,
    },
    {
        varieta: 'romanesca',
        peso: 0.341,
        lunghezza: 0.28,
    },
    {
        varieta: 'fiorentina',
        peso: 0.350,
        lunghezza: 0.31,
    },
    {
        varieta: 'napoletana',
        peso: 0.374,
        lunghezza: 0.38,
    },
    {
        varieta: 'tonda',
        peso: 0.310,
        lunghezza: 0.23,
    },
    {
        varieta: 'trombetta',
        peso: 0.362,
        lunghezza: 0.33,
    },
    {
        varieta: 'patisson',
        peso: 0.320,
        lunghezza: 0.38,
    },
    {
        varieta: 'gialla',
        peso: 0.333,
        lunghezza: 0.37,
    },
    {
        varieta: 'friulana',
        peso: 0.374,
        lunghezza: 0.42,
    },
    {
        varieta: 'crookneck',
        peso: 0.373,
        lunghezza: 0.49,
    }
]

function sommaPesoZucchine() {
    let sum = 0;
    for (let i = 0; i < arrayZucchine.length; i++) {
        const zucchina = arrayZucchine[i];
        sum += zucchina.peso;
        console.log(zucchina.peso);

    }

    console.log(`sum is: ${sum} kg`);
    return sum;

    
}

sommaPesoZucchine();
