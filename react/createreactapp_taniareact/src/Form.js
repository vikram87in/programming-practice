import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: '',
          }
      
          this.state = this.initialState
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm=()=>{
        this.props.handleSubmit({name:  this.state.name,job: this.state.job});
        this.setState(this.initialState);
    }

    render() {
        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={this.state.job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;