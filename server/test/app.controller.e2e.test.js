import ServerApp from '../app'
import Express from 'express';
const request = require('supertest');

const headers = {
  'Content-Type': 'application/json',
};

const serverApp = new ServerApp(Express());

beforeAll(async (done) => {
  await serverApp.start();
  done();
});

afterAll(() => {
  serverApp.stop();
});

function extractData(res) {
  return res.body.data;
}

async function requestData(query) {
  return await request(serverApp.getExpressApp())
    .post('/graphql')
    .send({ query: query })
    .set(headers);
}

it('[ARTICLES] returns the articles', async (done) => {
  const res = await requestData(`{
    articles {
      author
      excerpt
      id
      title
    }
    }`);
  const articles = extractData(res).articles;
  expect(articles.length, 10);
  done();
});

it('[ARTICLES] returned article match fields', async (done) => {
  const res = await requestData(`{
    articles {
      author
      excerpt
      id
      title
    }
    }`);
  const article = extractData(res).articles[0];
  expect(article).toEqual(expect.objectContaining({
    author: expect.any(String),
    excerpt: expect.any(String),
    id: expect.any(String),
    title: expect.any(String)
  }));

  done();
});

it('[ARTICLE_BY_ID] returns an article', async (done) => {
  let res = await requestData(`{
    articles {
      id
    }
    }`);
  const expected = extractData(res).articles[0].id;
  res = await requestData(`{
    articleById(id:"${expected}") {
      author
      content
      published
      tags
      title
    }
  }`);
  const article = extractData(res).articleById;
  expect(article.id, expected);
  done();
});