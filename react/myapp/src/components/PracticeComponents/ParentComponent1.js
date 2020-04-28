import React, { Component } from 'react';
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2'

class ParentComponent1 extends Component {
    render() {
        return (
            <div>
                This is ParentComponent
                <ChildComponent1 />
                <ChildComponent2 />
            </div>
        )
    }
}

export default ParentComponent1
