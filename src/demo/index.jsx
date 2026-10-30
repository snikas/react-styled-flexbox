import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import FlexContainer from '../index';

const Box = styled(FlexContainer)`
  background: green;
  color: white;
  flex-basis: 45%;
`;

const Row = () => (
  <FlexContainer justifySpaceBetween style={{ height: '50vh' }}>
    <Box justifyCenter itemsCenter>1</Box>
    <Box justifyCenter itemsCenter>2</Box>
  </FlexContainer>
);

createRoot(document.getElementById('root')).render(
  <>
    <Row />
    <Row />
  </>,
);
