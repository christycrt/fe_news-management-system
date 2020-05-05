import React from 'react'
import {connect} from 'react-redux'

class TestRedux extends React.Component {
    onClickJWT = () => {
        localStorage.setItem('jwt', 'jwtttttttttttt')
    }
    render () {
        const delFn = this.props.daleteDataFromStore;
        const User = this.props.stateFromStore;
        const JWT = this.props.jwt;
        console.log(JWT)
        return (
            <div>
                Hello
                {User.map((user) => {
                    return <div>{user.name}</div>
                })}
                <button onClick={() => this.props.deleteDataFromStore(1)}>Delete</button>
                <button onClick={this.onClickJWT}>SetJWT</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stateFromStore : state.data,
        jwt : state.jwt,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteDataFromStore : (id) => {
            return dispatch({type:'DEL_DATA', playload:id})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);