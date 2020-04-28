import React, { useState, useEffect } from 'react';

export default function HookMouse1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);



    const logMousePosition = (e) => {
        console.log('mouse event logging: ', e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY);
    }


    useEffect(() => {
        console.log('in DidMount');
        // window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('willunmount');
            // window.removeEventListener('mousemove', logMousePosition)
        }
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(x => x + 1)}>
                Click {count} times
				</button>
        </div>
    );
};