import React, { Component } from 'react';
import { ButtonLineLogin } from '../Component/LoginPage/ButtonLogin'
import { ButtonFacebookLogin } from '../Component/LoginPage/ButtonLogin'
import { ButtonGoogleLogin } from '../Component/LoginPage/ButtonLogin'
import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    position: relative;
`

const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
`

class LoginPage extends Component {
    render() {
        return (
            <Page className="col-12">
                <Content className="col-10 p-0">
                    <div className="col-12 row m-0 p-0">
                        <div className="col-12 col-sm-6 d-none d-sm-block">
                            <img src="image/logo.png" alt="logo" width="100%" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="col-12 p-0">
                                <div className="col-6 p-0 mx-auto d-sm-none">
                                    <img src="image/logo.png" alt="logo" width="100%" />
                                </div>
                                <h1 className="text-center">SIGN IN</h1>
                                <div className="col-10 p-0 mx-auto">
                                    <div className="mb-3"><ButtonLineLogin /></div>
                                    <div className="mb-3"><ButtonFacebookLogin /></div>
                                    <div><ButtonGoogleLogin /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Page>

        )
    }
}

export default LoginPage;