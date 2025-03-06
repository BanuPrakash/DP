import CheckboxComponent, { CheckboxComponentProps } from "../components/checkbox/CheckboxComponent";
import { InputComponentProps } from "../components/input/InputComponent";
import CheckboxFormElement from "./CheckboxFormElement";
import FormElement from "./FormElement";
import InputFormElement from "./InputFormElement";

export default class FormBuilder {
    elements: FormElement[];
    constructor(){
        this.elements = [];
    }

    input(props: InputComponentProps) {
        this.elements.push(new InputFormElement(props));
        return this;
    }


    checkbox(props: CheckboxComponentProps) {
        this.elements.push(new CheckboxFormElement(props));
        return this;
    }

    build(){
        return this.elements.map(element => element.component);
    }
}