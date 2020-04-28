import React, { Component } from 'react'
import withFunctionality from './HOCDemo'

class ChildComponent1 extends Component {
    

    render() {
        return (
            <div>
                This is child 1
                <input type="text" name="firstName" onChange={this.props.handleChange} value={this.props.firstName} /> {this.props.firstName}
                <input type="text" name="lastName" onChange={this.props.handleChange} value={this.props.lastName} /> {this.props.lastName}
                <button type='button' onClick={this.props.handleSubmit}>Submit</button>
                This is child 1

            </div>
        )
    }
}

export default withFunctionality(ChildComponent1)
