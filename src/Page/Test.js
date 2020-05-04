import React from 'react'
import Layout from '../Component/LayoutPage'
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
            <input type="text" onChange={props.handleText} />
        </div>
    )
}

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Text1: "1",
            Arrayy: [1, 2, 3],
            Component: <div />
        }
    }
    componentDidMount() {
        this.setState({ Component: <Component1 Text={this.state.Text1} Arrayy={this.state.Arrayy} handleText={this.handleText} /> })
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
            <Layout>
dassdasd
            </Layout>
        )
    }
}

export default Test