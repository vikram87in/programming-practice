import React, { Component, Fragment } from 'react';


class ChildRefDemo extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.inputElement = React.createRef();
    }
 
    focus = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.inputElement.current.focus();
    }
    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <Fragment>
                <CustomTextInput inputRef={this.inputElement} />
                <button onClick={this.focus}>Parent Click me to focus </button>
            </Fragment>
        );
    }
}


export default ChildRefDemo;


class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }
    focus = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }
    
    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <Fragment>
                <input
                    type="text"
                    ref={this.textInput}
                />
                <input
                    type="text"
                    ref={this.props.inputRef}
                />
             
                <button onClick={this.focus}>Child Click me to focus</button>
            </Fragment>
        );
    }
}
