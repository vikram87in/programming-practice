
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

const characters = [
  { name: 'Charlie', job: 'Janitor', }, { name: 'Mac', job: 'Bouncer', }, { name: 'Dee', job: 'Aspiring Actress', }, { name: 'Dennis', job: 'Bartender', }
]

class App extends Component {
  state = {
    characters: []
  }

  deleteRow = (index) => {
    const updatedCharacters = this.state.characters.filter((x, i) => {
      return i != index;
    })
    this.setState({ characters: updatedCharacters });
  }

  handleSubmit=(character)=>{
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {

    return (
      <div className="container">
        <Table characterData={this.state.characters} deleteRow={this.deleteRow} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;