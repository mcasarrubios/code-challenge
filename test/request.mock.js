import articles from './articles.data';

export default function(query) {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        articles: articles
      }
    });
  })
};