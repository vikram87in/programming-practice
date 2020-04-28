import React, { useState, useEffect } from 'react'

function UseEffectHooks(props) {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count => {
            return count + 1
        });


    }

    useEffect(() => {
        console.log('useeffect running')
        const i = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            console.log('clearinterval')
            clearInterval(i);
        }
    }, []);
    return (
        <div>
            {count}
        </div>
    )
}


export default UseEffectHooks
