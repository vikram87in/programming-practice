import React from 'react';

export default class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        //TODO:
        this.textboxRef = null;
        this.textboxRef2 = null;
    }

    focusTextInput = () => {
        //TODO:
        this.textboxRef.focus();
    }

    focusTextInput2 = () => {
        //TODO:
        this.textboxRef2.focus();
    }

    setRef = (element) => {
        debugger;
        this.textboxRef2 = element;
    }

    componentWillUnmount

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={e => {
                        debugger;
                        this.textboxRef = e;
                    }}
                />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />

                <input
                    type="text"
                    ref={this.setRef}
                />

                <input
                    type="button"
                    value="Focus the text input2"
                    onClick={this.focusTextInput2}
                />
            </div>
        );
    }
}