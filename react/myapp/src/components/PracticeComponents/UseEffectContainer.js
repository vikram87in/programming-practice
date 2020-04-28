import React, { useState, useEffect } from 'react'
import UseEffectHooks from './UseEffectHooks'

function UseEffectContainer() {
    const [ischildVisible, setVisibility] = useState(false);

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');




    return (
        <div>


            <button type='button' onClick={() => setVisibility((s) => !s)}>Toggle Visibilty</button>
            {ischildVisible && <UseEffectHooks />}



        </div>
    )
}

export default UseEffectContainer
