import React from 'react';
import { render } from 'react-dom';
import 'styled-components';
import FlexContainer from '../Container.jsx';

const FlexDiv = FlexContainer.extend`
  background: green;
  color: white;
  flex-basis: 45%;
`;

const App = () => (
  <div>
  <FlexContainer
    justifySpaceBetween
    style={{
      height: '100vh',
    }}
  >
    <FlexDiv
      justifyCenter
      itemsCenter
      contentCenter
    >
      1
    </FlexDiv>
    <FlexDiv
      justifyCenter
      itemsCenter
      contentCenter
    >
      2
    </FlexDiv>
  </FlexContainer>
  <FlexContainer
    justifySpaceBetween
    style={{
      height: '100vh',
    }}
  >
    <FlexDiv
      justifyCenter
      itemsCenter
      contentCenter
    >
      1
    </FlexDiv>
    <FlexDiv
      justifyCenter
      itemsCenter
      contentCenter
    >
      2
    </FlexDiv>
  </FlexContainer>
  </div>
);

render(<App />, document.getElementById('root'));
