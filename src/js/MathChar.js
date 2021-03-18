import Character from './character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.druggy = false;
    this.distance = 1;
  }

  get stoned() {
    return this.druggy;
  }

  set stoned(value) {
    this.druggy = value;
  }

  get attack() {
    let totalAttack = this.coefAttack * (1 - ((this.distance - 1) / 10));

    if (this.stoned) {
      totalAttack -= Math.log2(this.distance) * 5;
    }

    return totalAttack > 0 ? Math.round(totalAttack) : 0;
  }

  set attack(value) {
    this.coefAttack = value;
  }
}
