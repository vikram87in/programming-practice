import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Reservation from './Reservation';
import Calculator from './TemperatureCalculator';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <Calculator />
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);