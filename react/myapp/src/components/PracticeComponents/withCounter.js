import React from 'react'

const withCounter = (WrappedComponent, incrementValue) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementValue }
            })
        }

        render() {
            return <WrappedComponent incrementCount={this.incrementCount} count={this.state.count} {...this.props} />
        }
    }
    return WithCounter;
}

export default withCounter;