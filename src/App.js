import React from 'react';
import styled from 'styled-components';

import Routes from './Router'

const Global = styled.div`
  font-family: 'Roboto', sans-serif;  
`

function App() {
  return (
    <Global>
       <Routes />
    </Global>
  );
}

export default App;
