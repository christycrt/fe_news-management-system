import React, { Component } from 'react';
import '../CSS/Login.css';
import {ButtonLogin} from '../Component/LoginPage/ButtonLogin'

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-12">
                    <div className="col-6 mx-auto">
                        <img src="/image/logo.png" alt="logo" width="100%" />
                    </div>
                    <div class="login-form">
                        <h2 class="text-center">Sign in</h2>
                        <div class="text-center social-btn">
                            <a href="#"><ButtonLogin color="warning">Sign in with <b>Facebook</b></ButtonLogin></a>
                            <a href="#" class="btn btn-info btn-block"><i class="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                            <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default LoginPage;