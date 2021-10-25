import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';

function DataInput({input, setInput, todo, setTodo}) {
    console.log('DATA INPUT');
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodo([...todo, {inputText: input, id: parseInt(Math.random() * 100) , isCompleted: false}]);

        setInput('');

    }

    return (
        <div>
            <form className="data-form" onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                    <button type="submit" className="submit-button"><FontAwesomeIcon className="submit-icon" icon={faClipboard} /></button>
                </label>
            </form>
        </div>
    )
}

export default DataInput
