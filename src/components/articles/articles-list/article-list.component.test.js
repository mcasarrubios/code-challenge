import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './article-list.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});

it('shows a list of articles', () => {
  const wrapper = mount(<ArticleList articles={articles}/>);
  const items = wrapper.find('ArticleListItem');
  expect(items.length).toBe(articles.length);
});

it('renders an article item', () => {
  const wrapper = mount(<ArticleList articles={articles}/>);
  const items = wrapper.find('ArticleListItem');
  expect(items.at(0).key()).toBe(articles[0].id);
});