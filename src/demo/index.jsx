import { createRoot } from 'react-dom/client';
import FlexContainer from '../index';

const box = { background: 'green', color: 'white', flexBasis: '45%' };

const Row = () => (
  <FlexContainer justifySpaceBetween style={{ height: '50vh' }}>
    <FlexContainer justifyCenter itemsCenter style={box}>1</FlexContainer>
    <FlexContainer justifyCenter itemsCenter style={box}>2</FlexContainer>
  </FlexContainer>
);

createRoot(document.getElementById('root')).render(
  <>
    <Row />
    <Row />
  </>,
);
