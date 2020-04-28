import React, { Component } from 'react'

const withFunctionality = ((WrappedComponent) => {
    class WithFunctionality extends Component {
        constructor(props) {
            super(props)

            this.state = {
                firstName: '',
                lastName: ''
            }
        }

        handleChange = (e) => {
            let stateObj = {};
            stateObj[e.target.name] = e.target.value;
            this.setState(stateObj)
        }
        handleSubmit = () => {
            alert(this.state.firstName + ' : ' + this.state.lastName)
        }
        render() {
            return (

                <WrappedComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                    firstName={this.state.firstName} lastName={this.state.lastName} {...this.props} />
            )
        }
    }
    return WithFunctionality
})

export default withFunctionality;

