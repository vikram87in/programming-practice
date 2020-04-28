import React, { Component } from 'react'

class NonPureComponent extends Component {

// shouldComponentUpdate(nextProps, nextState) {
//     if(this.props.name == nextProps.name) return false;
//     return true;
// }
UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('in component will recieve props')
}

UNSAFE_componentWillMount() {
    console.log('in will mount')
}



    render() {
        console.log('in render non purecomonent')
        return (
            <div>
                Non Pure Component {this.props.name}
            </div>
        )
    }
}

export default NonPureComponent
