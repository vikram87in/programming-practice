import React from 'react'

function MemoComponent({name}) {
    console.log('in memo functional component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent);
