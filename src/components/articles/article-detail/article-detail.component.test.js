import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleDetail from './article-detail.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});

describe('Article detail component', () => {

  it('renders an article', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    const article = wrapper.find('.article-title');
    expect(article.text()).toBe(articles[0].title);
  });

  it('renders author', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    expect(wrapper.find('.article-author').text()).toBe(articles[0].author);
  });

  it('renders content', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    expect(wrapper.find('.article-content').text()).toBe(articles[0].content);
  });

  it('renders tags', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    expect(wrapper.find('.article-tags').text().trim().split(' ').filter(t => t)).toEqual(articles[0].tags);
  });

  it('renders published', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    expect(wrapper.find('.article-published').prop('checked')).toBe(articles[0].published);
  });

  it('renders title', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    expect(wrapper.find('.article-title').text()).toBe(articles[0].title);
  });

});