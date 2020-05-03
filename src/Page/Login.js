import React, { Component } from 'react';
import { ButtonLogin } from '../Component/LoginPage/ButtonLogin'
import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    position: relative;
    background-image: url("image/Login/bg-mobile.png");
    background-size: 100% 100%;
`

const Content = styled.div`
    position: relative;
    top: 45%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    @media screen and (max-width 575px) {
        position: fixed;
    }
`
const ImageContent = styled.img`
    height: 100vh;
    width: auto;
    @media screen and (max-width 1200px) {
        height: auto;
        width: 100%;
    }
`

class LoginPage extends Component {
    render() {
        return (
            <div className="col-12">
                <div className='row'>
                    <div className='col-7 d-none d-sm-block text-center'>
                        <ImageContent src="image/pic news.png" alt="pic news"/>
                    </div>
                    <Page className="col-12 col-sm-5">
                        <Content className="col-10 p-0">
                            <div className="col-8 p-0 mx-auto d-sm-none">
                                <img src="image/pic news.png" alt="pic news" width="100%" />
                            </div>
                            <h3 className="text-center"><b>SIGN IN</b></h3>
                            <div className="col-10 p-0 mx-auto">
                                <div className="mb-3"><ButtonLogin>Line</ButtonLogin></div>
                                <div className="mb-3"><ButtonLogin>Facebook</ButtonLogin></div>
                                <div><ButtonLogin>Google</ButtonLogin></div>
                            </div>
                        </Content>
                    </Page>
                </div>

            </div>
        )
    }
}

export default LoginPage;