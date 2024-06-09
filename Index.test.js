const sayHi = require('./Index');

test('returns "Hola Mundo"', () => {
  expect(sayHi()).toBe('Hola Mundo');
});
