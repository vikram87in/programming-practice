import React, { useState } from 'react'
import CustomTextInput from './RefDemo1';

function UseStateHooks() {
    const [count, updateCount] = useState(0);
    const [arrNames, updateArrayNames] = useState([]);
    const [name, updateName] = useState({ firstName: '', lastName: '' });

    function incrementCount() {
        for (var i = 0; i < 5; i++) {
            updateCount((x) => x + 1);
        }
    }

    function addArrayNames(x) {
        updateArrayNames([...arrNames, { idd: x, value: x + 1 }])
    }


    return (
        <div>
            {count}  <button onClick={() => incrementCount()}>Increment count by 5</button>

            {renderList(arrNames)} <button onClick={() => addArrayNames(2)}>add in list</button>

                <input type="text" value={name.firstName} onChange={(e) => updateName({ ...name, firstName: e.target.value })} /> {name.firstName}
                <input type="text" value={name.lastName} onChange={(e) => updateName({ ...name, lastName: e.target.value })} /> {name.lastName}

        </div>
    )
}

function renderList(arr) {
    return arr.map((ele) =>

        <div>
            <li>{ele.idd}</li>
            <li>{ele.value}</li>
        </div>

    )

}

export default UseStateHooks
