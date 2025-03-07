import React, { useState } from 'react'
import { BoldCommand, ItalicCommand } from './Command'

export default function CommandApp() {
    const [styles, setStyles] = useState();
    const utils = { styles, setStyles };

    const setTextToItalic = () => {
        const italicCommand = new ItalicCommand(utils);

    }

    const setTextToBold = () => {
        const boldCommand = new BoldCommand(utils);

    }
    <div>
        <div>
            <p style={styles}>
                Hello React Application``
            </p>
            <button type='button' onClick={setTextToBold}>B</button>
            <button type='button' onClick={setTextToItalic}>I</button>
            <button type='button'>UNDO</button>
        </div>
    </div>

}
