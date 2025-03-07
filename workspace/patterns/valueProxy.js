class Percentage {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return `Percentage ${this.value}`
    }

    valueOf() {
        return this.value / 100;
    }
}

let fivePercentage = new Percentage(5);

console.log(fivePercentage.toString());
let data = 25 * fivePercentage;

console.log(data);