export default class Numeric {
    constructor(value) {
        this.value = value;
    }

    accept(vistor) {
        return vistor.visitNumeric(this);
    }
}