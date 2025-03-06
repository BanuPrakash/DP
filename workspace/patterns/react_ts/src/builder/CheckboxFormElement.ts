import { ReactNode } from "react";
import FormElement from "./FormElement";
import CheckboxComponent, { CheckboxComponentProps } from "../components/checkbox/CheckboxComponent";

export default class CheckboxFormElement implements FormElement {
    component: ReactNode;

    constructor(props: CheckboxComponentProps) {
        this.component = CheckboxComponent(props);
    }
}