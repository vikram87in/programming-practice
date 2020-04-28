import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount} >{count}</button>

            </div>
        )
    }
}

export default withCounter(HoverCounter, 2)
