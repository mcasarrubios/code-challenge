import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleDetail from './article-detail.component';
import articles from '../../../../test/articles.data';

Enzyme.configure({adapter: new Adapter()});

describe('Article detail page', () => {

  it('renders an article', () => {
    const wrapper = mount(<ArticleDetail articleShowed={articles[0]}/>);
    const article = wrapper.find('.article-title');
    expect(article.text()).toBe(articles[0].title);
  });

});