class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;

    // this.numberTry = 0;
  }

  guess() {
    // console.log(this.minValue, this.maxValue);
    // console.log(`number of trying ${this.numberTry++}`);
    // console.log(`min is ${this.minValue} and max is ${this.maxValue}`);
    return Math.floor((this.maxValue + this.minValue) / 2);
  }

  lower() {
    this.maxValue = Math.floor((this.maxValue + this.minValue) / 2 + 1);
  }

  greater() {
    this.minValue = Math.floor((this.maxValue + this.minValue) / 2);
  }
}

module.exports = GuessingGame;
