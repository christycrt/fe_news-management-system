import React from 'react'
import Navbar from './Navbar'
class LayoutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}
export default LayoutPage