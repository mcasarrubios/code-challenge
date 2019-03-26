export const ARTICLES_CREATE = (article) => `mutation {
  articleCreate(article:${article}) {
    id
    title
    author
    tags
    content
    published
    excerpt
  }
}`;

export const ARTICLES_UPDATE = (id, data) => `mutation {
  articleUpdate(id:"${id}", article:${data}) {
    id
    title
    author
    tags
    content
    published
    excerpt
  }
}`;

export const ARTICLES_DELETE = (id) => `mutation {
  articleDelete(id:"${id}") {
    id
  }
}`;

