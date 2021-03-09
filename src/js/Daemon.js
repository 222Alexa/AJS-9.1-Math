import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.deffence = 40;
  }
}
