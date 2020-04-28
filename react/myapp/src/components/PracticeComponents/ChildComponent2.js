import React, { Component } from 'react'
import ChildComponent3 from './ChildComponent3'

class ChildComponent2 extends Component {
    render() {
        return (
            <div>
                This is child 2
                <ChildComponent3 />
                This is child 2
            </div>
        )
    }
}

export default ChildComponent2
