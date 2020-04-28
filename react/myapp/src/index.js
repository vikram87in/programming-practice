import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/PracticeComponents/Login';
import Reservation from './components/PracticeComponents/Reservation';
import Calculator from './components/PracticeComponents/TemperatureCalculator';
import ChildRefDemo from './components/PracticeComponents/ChildRefDemo';
import RefDemo1 from './components/PracticeComponents/RefDemo1';
import CallBackRefDemo from './components/PracticeComponents/CallBackRefDemo';
import ErrorBoundaryApp from './components/PracticeComponents/ErrorBoundary';
import GetDerivedStateFromPropsDemo from './components/PracticeComponents/GetDerivedStateFromPropsDemo';
import UseStateHooks from './components/PracticeComponents/UseStateHooks'
import UseEffectHooks from './components/PracticeComponents/UseEffectHooks'
import UseEffectContainer from './components/PracticeComponents/UseEffectContainer'
import DataFetching from './components/PracticeComponents/DataFetching'
import DataFetchingById from './components/PracticeComponents/DataFetchingById'
import SortableComponent from './components/PracticeComponents/SortableComponent'
import SortableList from './components/PracticeComponents/SortableList'
import ReactLoadable from './components/PracticeComponents/ReactLoadable'
import ParentComponent from './components/PracticeComponents/ParentComponent'
import ClickCounter from './components/PracticeComponents/ClickCounter'
import HoverCounter from './components/PracticeComponents/HoverCounter'
import ParentComponent1 from './components/PracticeComponents/ParentComponent1'
import ParametersInEventHandlers from './components/PracticeComponents/ParametersInEventHandlers'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <ParametersInEventHandlers />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);