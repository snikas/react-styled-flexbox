import React from 'react';
import {render} from 'react-dom';
import FlexContainer from '../Container.jsx';
import styled from 'styled-components';

const FlexDiv = FlexContainer.extend`
  background: green;
  color: white;
  flex-basis: 45%;
`;

class App extends React.Component {
  render () {
    return (
    <FlexContainer
      justifySpaceBetween
      style={{
        height: '100vh'
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
    )
  }
}

render(<App/>, document.getElementById('root'));