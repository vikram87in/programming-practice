import React  from 'react';

export default class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
     //TODO:
this.textboxRef = React.createRef();
    }
  
    focusTextInput=()=> {
        //TODO:
        this.textboxRef.current.focus();
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            ref={this.textboxRef}
             />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }