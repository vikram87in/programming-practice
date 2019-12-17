import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Reservation from './Reservation';
import Calculator from './TemperatureCalculator';
import ChildRefDemo from './ChildRefDemo';
import RefDemo1 from './RefDemo1';
import CallBackRefDemo from './CallBackRefDemo';
import ErrorBoundaryApp from './ErrorBoundary';
import GetDerivedStateFromPropsDemo from './GetDerivedStateFromPropsDemo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
           <GetDerivedStateFromPropsDemo/>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);