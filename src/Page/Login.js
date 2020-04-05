import React, { Component } from 'react';
import { ButtonLineLogin } from '../Component/LoginPage/ButtonLogin'
import { ButtonFacebookLogin } from '../Component/LoginPage/ButtonLogin'
import { ButtonGoogleLogin } from '../Component/LoginPage/ButtonLogin'
import styled from 'styled-components';


class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-12 p-0">
                    <div className="col-6 p-0 mx-auto">
                        <img src="image/logo.png" alt="logo" width="100%" />
                    </div>
                    <h1 className="text-center">SIGN IN</h1>
                    <div className="col-10 p-0 mx-auto">
                        <div className="mb-3"><ButtonLineLogin/></div>
                        <div className="mb-3"><ButtonFacebookLogin/></div>
                        <div><ButtonGoogleLogin/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;