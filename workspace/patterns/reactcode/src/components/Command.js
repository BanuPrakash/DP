export class BoldCommand {
    prevFontWeight;
    // utils from React Component , styles and setStyles
    // let [styles, setStyles] = useState()'
    constructor(utils) {
        this.utils = utils;
        this.prevFontWeight = utils.styles.fontWeight;
    }
    getNextStyle() {
        if (this.prevFontWeight === 'bold'
            || typeof this.prevFontWeight === 'number' && this.prevFontWeight >= 700) {
            return 'normal';
        }
        return 'bold'
    }

    execute() {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontWeight: nextFontStyle
        }))
    }

    undo() {
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontWeight: this.prevFontWeight
        }))
    }
}

export class ItalicCommand {
    prevFontStyle;
    // utils from React Component , styles and setStyles
    // let [styles, setStyles] = useState()'
    constructor(utils) {
        this.utils = utils;
        this.prevFontStyle = utils.styles.fontStyle;
    }
    getNextStyle() {
        if (this.prevFontStyle === 'italic') {
            return 'normal';
        }
        return 'italic'
    }

    execute() {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontStyle: nextFontStyle
        }))
    }

    undo() {
        this.utils.setStyles((prevStyles) => ({
            ...prevStyles,
            fontStyle: this.prevFontStyle
        }))
    }
}