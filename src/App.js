import React from 'react';
import './App.css';
import LoginPage from './Page/Login';
import styled from 'styled-components';

const Global = styled.div`
  font-family: 'Roboto', sans-serif;
`

function App() {
  return (
    <Global>
       <LoginPage />
    </Global>
   
  );
}

export default App;
