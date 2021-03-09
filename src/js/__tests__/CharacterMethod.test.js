import Daemon from '../Daemon';
import Magician from '../Magician';
import Character from '../character';

test('Метод levelUp повышает уровень на 1 и изменяет показатели health, coefAttack, deffence', () => {
  const recieved = new Magician('Valera', 'Magician');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Valera',
    type: 'Magician',
    health: 100,
    level: 2,
    coefAttack: 12,
    deffence: 48,
    distance: 1,
    druggy: false,

  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Magician('Lusie');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('Нельзя повысить уровень умершего!');
});

test('Метод damage(points) меняет внутреннее состояние объекта(нанесение урона)', () => {
  const recieved = new Daemon('Lusie');
  recieved.damage(1);
  const result = {
    name: 'Lusie',
    type: 'Daemon',
    health: 99.4,
    level: 1,
    coefAttack: 10,
    deffence: 40,
    distance: 1,
    druggy: false,

  };
  expect(recieved).toEqual(result);
});

test('Метод damage(points) не должен изменять значения, если health = 0', () => {
  const recieved = new Daemon('Lusie');
  recieved.health = 0;
  const result = {
    name: 'Lusie',
    type: 'Daemon',
    health: 0,
    level: 1,
    coefAttack: 10,
    deffence: 40,
    distance: 1,
    druggy: false,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test('при health < 0 метод damage(points) должен уствновить health = 0', () => {
  const recieved = new Daemon('Valera');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});
