import React, { Component } from 'react'
import ChildComponent4 from './ChildComponent4'
class ChildComponent3 extends Component {
    render() {
        return (
            <div>
            This is child 3
            <ChildComponent4/>
            This is child 3

            </div>
        )
    }
}

export default ChildComponent3
