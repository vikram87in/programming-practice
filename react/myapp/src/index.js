import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Reservation from './Reservation';
import Calculator from './TemperatureCalculator';
import ChildRefDemo from './ChildRefDemo';
import ErrorBoundary, { ErrorBoundaryApp } from './ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ErrorBoundary>
                <ErrorBoundaryApp />
            </ErrorBoundary>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);