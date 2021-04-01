const { addNumbersFromArray } = require('../index');

describe('Pruebas función addNumbersFromArray', () => {
    it('No sé envia parametro, debe mostar mensaje ingresa array', () => {
        expect(addNumbersFromArray()).toBe('Ingrese un array');
    });
    it('Se pasa como parametro array vacío, debe mostar mensaje ingresa array', () => {
        expect(addNumbersFromArray()).toBe('Ingrese un array');
    });
    it('Prueba de suma con [1,2,3], debe retornar 6', () => {
        const sum = addNumbersFromArray([1,2,3]);
        expect(sum).toBe(6);
    });
    it('Prueba de suma con un item string [1,2,"5",3], debe retornar 6', () => {
        const sum = addNumbersFromArray([1,2,3]);
        expect(sum).toBe(6);
    });
});
