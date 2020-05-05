import React from 'react';
import styled from 'styled-components';

import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

import Routes from './Router'

const Global = styled.div`
  font-family: 'Roboto', sans-serif;  
`

function App() {
  const store = createStore(reducer);
  
  return (
    <Provider store={store}>
      <Global>
        <Routes />
      </Global>
    </Provider>
  );
}

export default App;
