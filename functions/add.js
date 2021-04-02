const addNumbersFromArray = (array) => {
    if( array === undefined ) return 'Envia un array como prop';
    if( !array.length ) return 'Enviaste un array sin elementos';

    let acum = 0;

    array.forEach((item) => {
        if( typeof item === 'number' ) {
            acum += item;
        }
    });

    return acum;
}

module.exports = addNumbersFromArray;