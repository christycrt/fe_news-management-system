import React from 'react'

const Component1 = (props) => {
    
    return (
        <div>
            {props.Text}
            {props.Arrayy.map((a) => {
                return (
                    <div>
                        {a}
                    </div>
                )
            })}
            <input type="text" onChange={props.handleText}/>
        </div>
    )
}

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Text1: "1",
            Arrayy: [1,2,3],
            Component: <div/>
        }
    }
    componentDidMount() {
        this.setState({Component:<Component1 Text={this.state.Text1} Arrayy={this.state.Arrayy} handleText={this.handleText}/>})
    }
    handleText = (e) => {
        this.setState({
            Text1: e.target.value
        })
    }
    handleText = (e) => {
        this.setState({
            Text1: e.target.value
        })
    }
    render() {
        return (
            <div className='col-12'>
                {this.state.Component}
            </div>
        )
    }
}

export default Test