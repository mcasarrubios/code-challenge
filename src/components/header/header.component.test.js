import React from 'react';
import Header from './header.component';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it.only('shows the title', () => {
  const expected = 'Awesome title';
  const wrapper = mount(<Header title={expected}/>);
  const title = wrapper.find('.header-title');
  expect(title.text()).toBe(expected);
});