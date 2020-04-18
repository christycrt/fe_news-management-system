import React from 'react'

class CreateNewsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Component: <div>Compoent 1</div>,
            NumberComponent: 1
        }
    }
    handleNextComponent = async () => {
        if (this.state.NumberComponent !== 3) {
            await this.setState({ NumberComponent: this.state.NumberComponent + 1 })
            if (this.state.NumberComponent == 2) {
                await this.setState({ Component: <div>Component 2</div> })
            }
            else if (this.state.NumberComponent == 3) {
                await this.setState({ Component: <div>Component 3</div> })
            }
        }
    }
    handlePreviousComponent = async () => {
        if (this.state.NumberComponent !== 1) {
            await this.setState({ NumberComponent: this.state.NumberComponent - 1 })
            if (this.state.NumberComponent == 1) {
                await this.setState({ Component: <div>Component 1</div> })
            }
            else if (this.state.NumberComponent == 2) {
                await this.setState({ Component: <div>Component 2</div> })
            }
        }
    }
    render() {
        return (
            <div>
                {this.state.NumberComponent}
                {this.state.Component}
                <button onClick={this.handlePreviousComponent}>Previous</button>
                <button onClick={this.handleNextComponent}>Next</button>
            </div>
        )
    }
}

export default CreateNewsPage