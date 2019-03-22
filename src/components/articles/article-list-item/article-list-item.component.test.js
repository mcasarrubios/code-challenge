import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleListItem from './article-list-item.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});

const article = articles[0];

it('shows the author', () => {
  const wrapper = mount(<ArticleListItem article={article}/>);
  const element = wrapper.find('.card-header h4');
  expect(element.text()).toBe(article.author);
});

it('shows the excerpt', () => {
  const wrapper = mount(<ArticleListItem article={article}/>);
  const element = wrapper.find('.card-body p');
  expect(element.text()).toBe(article.excerpt);
});