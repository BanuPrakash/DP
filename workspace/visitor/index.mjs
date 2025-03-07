import Numeric from "./Numeric.mjs";
import BinaryExp from "./BinaryExp.mjs";
import Visitor from "./Visitor.mjs";

let five = new Numeric(5);
let ten = new Numeric(10);

let binExp = new BinaryExp(five, "*", ten);

let visitor = new Visitor();

console.log(binExp.accept(visitor)); // double dispatch