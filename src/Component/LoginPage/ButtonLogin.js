import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  width:100%;
  padding:8px;
  border-radius:30px;
  border:none;
  background-image: linear-gradient(${props => props.firstcolor}, ${props => props.secondcolor});
  color:white;
  font-size:20px;
`;

export const ButtonLineLogin = (props) => {
    return <Button firstcolor="#71DA95" secondcolor="#A9DB8E"><img className="mr-2" src="image/Login/line.png" alt="line" width="25px"/>Sign in with Line</Button>
}

export const ButtonFacebookLogin = (props) => {
    return <Button firstcolor="#2C60AB" secondcolor="#41BACF"><img className="mr-2" src="image/Login/facebook.png" alt="facebook" width="25px"/>Sign in with Facebook</Button>
}

export const ButtonGoogleLogin = (props) => {
    return <Button firstcolor="#E46F77" secondcolor="#F8978F"><img className="mr-2" src="image/Login/google.png" alt="google" width="25px"/>Sign in with Google</Button>
}


// export const Button = (props) => {
//     return <div className='btn btn-warning'>{props.children}</div>
// }