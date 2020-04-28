import React, { Component } from 'react'
import withFunctionality from './HOCDemo'

class ChildComponent4 extends Component {
    

    render() {
    const {handleChange, handleSubmit, firstName, lastName} = this.props;
        return (
            <div>
                This is child 4
                <input type="text" name="firstName" onChange={handleChange} value={firstName} /> {firstName}
                <input type="text" name="lastName" onChange={handleChange} value={lastName} /> {lastName}
                <button type='button' onClick={handleSubmit}>Submit</button>
                This is child 4
            </div>

        )
    }
}

export default withFunctionality(ChildComponent4)
