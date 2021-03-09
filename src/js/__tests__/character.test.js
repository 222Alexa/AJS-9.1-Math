import Character from '../character';
import MathChar from '../MathChar';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new MathChar('xxx', 'Fairy');
    return result;
  }).toThrow();
});

test('creation Daemon', () => {
  const recieved = new Daemon('Valera', 'Daemon');
  expect(recieved).toEqual({
    name: 'Valera',
    type: 'Daemon',
    health: 100,
    level: 1,
    coefAttack: 10,
    deffence: 40,
    druggy: false,
    distance: 1,

  });
});
test('creation Magician', () => {
  const recieved = new Magician('Lusie', 'Magician');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Magician',
    health: 100,
    level: 1,
    druggy: false,
    distance: 1,
    coefAttack: 10,
    deffence: 40,

  });
});
