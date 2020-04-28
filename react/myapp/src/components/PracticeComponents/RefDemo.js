import React, { Component, Fragment } from 'react';

class RefDemo extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
    }
    focus1 = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput1.current.focus();
    }
    focus2 = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput2.current.focus();
    }
    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <Fragment>
                <input
                    type="text"
                    ref={this.textInput1}
                />
                <input
                    type="text"
                    ref={this.textInput2}
                />
                <button onClick={this.focus1}>Click me to focus 1</button>
                <button onClick={this.focus2}>Click me to focus 2</button>
            </Fragment>
        );
    }
}


export default RefDemo;

