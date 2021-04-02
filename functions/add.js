const addNumbersFromArray = (array) => {
    // if( !array || !array.length ) return 'Ingrese un array';

    let acum = 0;

    array.forEach((item) => {
        if( typeof item === 'number' ) {
            acum += item;
        }
    });

    return acum;
}

module.exports = addNumbersFromArray;