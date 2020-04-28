import React, { useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

export default function SortableList(props) {

    const [list, setList] = useState(props.objList);

    const VikElement = SortableElement(({ value }) => {
        return <li>----------------{value}--------------------</li>
    });

    const VikList = SortableContainer(() => {
        return (
            <div>
                {list.map((obj, index) => <VikElement key={index} index={index} value={obj.value} />)}
            </div>
        )
    });

    const onSortEndVik = ({ oldIndex, newIndex }) => {
        let sortedList = arrayMove(list, oldIndex, newIndex);
        setList(sortedList);
    };
    return (
        <div>
            <VikList onSortEnd={onSortEndVik} />
        </div>
    )
}
