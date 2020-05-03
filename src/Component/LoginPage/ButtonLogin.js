import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  width:100%;
  padding:8px;
  border-radius:30px;
  border:none;
  background-color:#0095FF;
  color:white;
  font-size:20px;
`;

export const ButtonLogin = (props) => {
return <Button><img className="mr-2" src={`image/Login/${props.children}.png`} alt="line" width="25px"/>Sign in with {props.children}</Button>
}
