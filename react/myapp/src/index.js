import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <button>hi</button>
            </div>
        )
    }
}
setInterval(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
}, 1000);

