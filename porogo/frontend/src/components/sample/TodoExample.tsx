import React, { useState } from 'react';

interface TodoExampleProps {
    name: string,
    completed: boolean,
}

export default function TodoExample({ todo }: { todo: TodoExampleProps}) {
    const { name, completed } = todo;
    const [ done, setDone ] = useState(completed);

    const className = done ? 'done' : '';

    function toggleDone() {
        setDone(!done);
    }

    return (
        <div>
            <input type="checkbox" name="done" checked={done} onChange={toggleDone}></input>
            <p className={className}>{name}</p>
        </div>
    );
}