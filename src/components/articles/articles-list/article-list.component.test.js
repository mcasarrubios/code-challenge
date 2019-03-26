import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './article-list.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});

describe('ArticleList component', () => {
  it('shows a list of articles', () => {
    const wrapper = mount(<Router><ArticleList articles={articles}/></Router>);
    const items = wrapper.find('ArticleListItem');
    expect(items.length).toBe(articles.length);
  });

  it('renders an article item', () => {
    const wrapper = mount(<Router><ArticleList articles={articles}/></Router>);
    const items = wrapper.find('ArticleListItem');
    expect(items.at(0).key()).toBe(articles[0].id);
  });
});