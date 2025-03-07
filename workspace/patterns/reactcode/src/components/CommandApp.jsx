import React, { useRef, useState } from 'react'
import { BoldCommand, ItalicCommand } from './Command'

// hook
function useHistoryManager() {
    const [backHistory, setBackHistory] = useState([]);
    const topBackIndexRef = useRef(-1);

    const executeCommand = (command) => {
        command.execute();
        setBackHistory((prev) => [...prev, command]);
        topBackIndexRef.current++;
    };

    const undo = () => {
        if (!backHistory.length || topBackIndexRef.current === -1) return;
        const topUndoCommand = backHistory[topBackIndexRef.current];
        topUndoCommand.undo();
        setBackHistory((prev) => prev.slice(0, -1));
        topBackIndexRef.current--;
    }

    return {
        executeCommand, undo
    }
}

export default function CommandApp() {
    const [styles, setStyles] = useState({});
    const utils = { styles, setStyles };
    const { executeCommand, undo } = useHistoryManager();

    const setTextToItalic = () => {
        const italicCommand = new ItalicCommand(utils);
        executeCommand(italicCommand);
    }

    const setTextToBold = () => {
        const boldCommand = new BoldCommand(utils);
        executeCommand(boldCommand);
    }
    return <div>
        <div>
            <p style={styles}>
                Hello React Application
            </p>
            <button type='button' onClick={setTextToBold}>B</button>
            <button type='button' onClick={setTextToItalic}>I</button>
            <button type='button' onClick={undo}>UNDO</button>
        </div>
    </div>

}
