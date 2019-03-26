import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleListItem from './article-list-item.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});
const article = articles[0];

describe('ArticleListItem component', () => {
  it('shows the author', () => {
    const wrapper = mount(<Router><ArticleListItem article={article}/></Router>);
    const element = wrapper.find('.card-header-subtitle');
    expect(element.text()).toBe(article.author);
  });

  it('shows the excerpt', () => {
    const wrapper = mount(<Router><ArticleListItem article={article}/></Router>);
    const element = wrapper.find('.card-body p');
    expect(element.text()).toBe(article.excerpt);
  });
});