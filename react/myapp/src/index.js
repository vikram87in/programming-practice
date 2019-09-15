import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.tick();
        // }, 1000);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    onButtonClick = (one,two) => {
        debugger;
        this.setState((state, props) => {
            return { counter: state.counter + 1 }
        });
        this.setState((state, props) => {
            return { counter: state.counter + 1 }
        });
        // this.setState((state,props)=>{
        //     return {counter: state.counter+1}
        // });
        // this.setState({counter: this.state.counter+1});
        // this.setState({counter: this.state.counter+1});
        // this.setState({counter: this.state.counter+1});

        // this.setState((prevState) => ({ counter: prevState.counter + 1 }))
        // this.setState((prevState) => ({ counter: prevState.counter + 1 }))
        // this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }


    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        let number = 100;
        return (
            <div>
                <h1>Hello, world! The counter is {this.state.counter}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.onButtonClick.bind(this)}>+3</button>
                <button onClick={this.onButtonClick.bind(this)}>+3</button>
            </div >
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

