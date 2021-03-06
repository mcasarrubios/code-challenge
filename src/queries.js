export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_BY_ID_QUERY =  `query ArticleById($id: String!) {
  articleById(id: $id) {
    id
    author
    content
    excerpt
    published
    tags
    title
  }
}`;
