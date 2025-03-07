class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    // Add, Subtract , .. Commands
    execute(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        let command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.value = valueToAdd;
    }
    execute(currentValue) {
        return currentValue + this.value;
    }
    undo(currentValue) {
        return currentValue - this.value;
    }
}


class SubtractCommand {
    constructor(valueToAdd) {
        this.value = valueToAdd;
    }
    execute(currentValue) {
        return currentValue - this.value;
    }
    undo(currentValue) {
        return currentValue + this.value;
    }
}

let calc = new Calculator();
calc.execute(new AddCommand(5));
calc.execute(new AddCommand(50));
console.log("Value ", calc.value);
calc.undo();
console.log("Value ", calc.value);

calc.execute(new SubtractCommand(2));
console.log("Value ", calc.value);
