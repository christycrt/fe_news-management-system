import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: {
                username: "",
                password: ""
            }
        }
    }
    onChangeText = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState(prevState => ({
            login: {                   // object that we want to update
                ...prevState.login,    // keep all other key-value pairs
                [name]: value       // update the value of specific key
            }
        }))
    }
    render() {
        return (
            <form>
                <input onChange={(e) => this.onChangeText(e)} value={this.state.login.username} name="username" />
                <input onChange={(e) => this.onChangeText(e)} value={this.state.login.password} name="password" />
            </form>
        )
    }
}
export default Dashboard