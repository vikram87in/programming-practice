import React, { Component, PureComponent } from 'react'
import PureComponentt from './PureComponent'
import NonPureComponent from './NonPureComponent'
import MemoComponent from './MemoComponent'
import NonPureComponent2 from './NonPureComponent2'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vikram',
            id: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.name != this.state.name)return true;
    //     return false
    // }
    

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'vikram', id: 1 })
        }, 5000);
    }


    render() {
        console.log('in parent component')
        return (
            <div>
                Parent Component
                <NonPureComponent name={this.state.name} key={this.state.id}/>
                {/* <PureComponentt name={this.state.name}/>
                <MemoComponent name={this.state.name}/>
                <NonPureComponent2 name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComponent
