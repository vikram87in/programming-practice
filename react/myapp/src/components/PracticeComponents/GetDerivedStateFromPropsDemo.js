

import React, { Component } from 'react';


class GetDerivedStateFromPropsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    static changeState = () => { //can use this to call other static functions
        console.log(this);
        this.changeState1();
    }

    static changeState1 = () => {
        console.log('hi');
    }
    static getDerivedStateFromProps(props, state) { 
        //called
        //can't use this here
    console.log('GetDerived life cycle method called');
        GetDerivedStateFromPropsDemo.changeState();
    }
    onClick=()=>{
        this.setState({value:2});
    }
    render() {
        return (
            <div>
                rendered output
                <button onClick={this.onClick}/>
            </div>
        );
    }
}


export default GetDerivedStateFromPropsDemo;