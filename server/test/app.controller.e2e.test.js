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

describe('[QUERY ARTICLES]', () => {

  it('returns the articles', async (done) => {
    const res = await requestData(`{
      articles {
        id
      }
      }`);
    const articles = extractData(res).articles;
    expect(articles.length, 10);
    done();
  });

  it('returned article contains fields', async (done) => {
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
});

describe('[QUERY ARTICLE_BY_ID]', () => {
  it('returns an article', async (done) => {
    let res = await requestData(`{
      articles {
        id
      }
      }`);
    const expected = extractData(res).articles[0].id;
    res = await requestData(`{
      articleById(id:"${expected}") {
        id
      }
    }`);
    const article = extractData(res).articleById;
    expect(article.id, expected);
    done();
  });

  it('returned article contains fields', async (done) => {
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
        id
      }
    }`);
    const article = extractData(res).articleById;
    expect(article).toEqual(expect.objectContaining({
      author: expect.any(String),
      content: expect.any(String),
      published: expect.any(Boolean),
      id: expect.any(String),
      title: expect.any(String),
      tags: expect.any(Array),
    }));
    done();
  });
});

describe('[MUTATION ARTICLE_CREATE]', () => {
  it('creates an article', async (done) => {
    const res = await requestData(`mutation {
      articleCreate(article:{
        author:"Awesome author",
        tags:["tag1", "tag2"],
        content:"Awesome content",
        title: "Awesome title",
        published:true,
        excerpt: "Awesome excerpt"
      }) {
        id
        title
        author
      }
    }`);
    const article = extractData(res).articleCreate;
    expect(article.author).toEqual('Awesome author');
    done();
  });

  it('returns 400 if mandatory fields are missing', async (done) => {
    const res = await requestData(`mutation {
      articleCreate(article:{
        author:"Awesome author",
      }) {
        id
      }
    }`);
    expect(res.status).toEqual(400);
    done();
  });
});

describe('[MUTATION ARTICLE_UPDATE]', () => {
  it('updates an article', async (done) => {
    let res = await requestData(`{
      articles {
        id
        author
      }
      }`);
    const article = extractData(res).articles[0];
    const expected = article.author + ' modified';
    res = await requestData(`mutation {
      articleUpdate(id:"${article.id}", article:{
        author:"${expected}",
      }) {
        id
        author
      }
    }`);
    const modifiedArticle = extractData(res).articleUpdate;
    expect(modifiedArticle.author).toEqual(expected);
    done();
  });
});

describe('[MUTATION ARTICLE_DELETE]', () => {
  it('deletes an article', async (done) => {
    let res = await requestData(`{
      articles {
        id
        author
      }
      }`);
    const article = extractData(res).articles[0];
    res = await requestData(`mutation {
      articleDelete(id:"${article.id}") {
        id
      }
    }`);
    const deletedArticle = extractData(res).articleDelete;
    expect(deletedArticle.id).toEqual(article.id);
    done();
  });
});

