import React, { PureComponent } from 'react'

class PureComponentt extends PureComponent {
    render() {
        console.log('in pure component')
        return (
            <div>
                Pure Component {this.props.name}

            </div>
        )
    }
}

export default PureComponentt
