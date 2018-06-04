import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlexContainer from './';

configure({ adapter: new Adapter() });

test('Test is running', () => {
  const component = shallow(<FlexContainer />);
  expect(component).toBeDefined();
});
