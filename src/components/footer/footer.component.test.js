import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer.component';

Enzyme.configure({adapter: new Adapter()});

it('shows the slogan', () => {
  const expected = 'Awesome slogan';
  const wrapper = mount(<Footer slogan={expected}/>);
  const title = wrapper.find('.footer-slogan');
  expect(title.text()).toBe(expected);
});