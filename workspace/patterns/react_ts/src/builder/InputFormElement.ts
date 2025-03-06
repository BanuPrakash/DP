import { ReactNode } from "react";
import FormElement from "./FormElement";
import InputComponent, { InputComponentProps } from "../components/input/InputComponent";

// can use DI --> Inversify
export default class InputFormElement implements FormElement {
    component: ReactNode;

    constructor(props: InputComponentProps) {
        this.component = InputComponent(props);
    }
}