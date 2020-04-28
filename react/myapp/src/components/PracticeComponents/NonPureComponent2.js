import React, { Component } from 'react'

class NonPureComponent2 extends Component {
constructor(props) {
    super(props)

    this.state = {
         name: this.props.name
    }
}

componentWillReceiveProps(nextProps) {
    if (this.props.name != nextProps.name) {
        this.setState({name: nextProps.name})
    }
}


shouldComponentUpdate(nextProps, nextState) {
    if(this.state == nextState) return false;
    return true;
}


    render() {
        console.log('in non purecomonent2')
        return (
            <div>
                Non Pure Component {this.state.name}
            </div>
        )
    }
}

export default NonPureComponent2
