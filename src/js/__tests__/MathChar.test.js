import Daemon from '../Daemon';
import Magician from '../Magician';
import MathChar from '../MathChar';

// создание персонажа - character.test

test('геттер возвращает корректное значение, если coefAttack < 0', () => {
  const busido = new Daemon('Busido');
  busido.coefAttack = -20;
  busido.distance = 3;
  busido.druggy = false;
  expect(busido.attack).toBe(0);
});

test('геттер возвращает корректное значение, если coefAttack < 0 и применен druggy', () => {
  const busido = new Daemon('Busido');
  busido.stoned = true;
  busido.distance = 3;
  expect(busido.attack).toBe(0);
});

test('геттер возвращает корректное значение, если coefAttack > 0', () => {
  const busido = new Daemon('Busido');
  busido.coefAttack = 100;
  busido.distance = 3;
  busido.druggy = false;
  expect(busido.attack).toBe(80);
});

test('геттер возвращает корректное значение, если coefAttack > 0 и применен druggy', () => {
  const busido = new Magician('Busido');
  busido.stoned = true;
  expect(busido.stoned).toBeTruthy();
});

test('геттер возвращает корректное значение, если coefAttack > 0 и применен druggy', () => {
  const testMagician = new Magician('Gandalf');
  testMagician.coefAttack = 200;
  testMagician.distance = 2;
  testMagician.stoned = true;
  expect(testMagician.attack).toBe(175);// ошибка исправлена
});
