import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header.component';

Enzyme.configure({adapter: new Adapter()});

describe('Header component', () => {
  it('shows the title', () => {
    const expected = 'Awesome title';
    const wrapper = mount(<Router><Header title={expected}/></Router>);
    const title = wrapper.find('.header-title');
    expect(title.text()).toBe(expected);
  });
});