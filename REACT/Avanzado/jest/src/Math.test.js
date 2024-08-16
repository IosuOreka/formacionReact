const {resta, multiplicacion, division} = require('./components/math.js');

test('Resto 2 a 8 y espero 6', () => {
  expect(resta(8, 2)).toBe(6);
});

test('Multiplico 2 x 8 y espero 16', () => {
  expect(multiplicacion(8, 2)).toBe(16);
});

test('Divido 8 entre 2 y espero 4', () => {
  expect(division(8, 2)).toBe(4);
});

test('Divido 8 entre 0 y espero Infinito', () => {
  expect(division(8, 0)).toBe('Infinito');
});

