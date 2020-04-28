import React, { Component } from 'react'

export default class ParametersInEventHandlers extends Component {
    UNSAFE_componentWillMount() {
        console.log('in will mount')
    }

    handleClick = (val) => {
        if (val == 1) {
            console.log('clicked')
        }   
    }

    render() {
        return (
            <div>
                <button type='button' onClick={()=>this.handleClick(1)}>Click</button>
            </div>
        )
    }
}

