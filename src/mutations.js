export const ARTICLES_CREATE = `mutation ArticleCreate(
    $author: String!
    $content: String!
    $excerpt: String!
    $published: Boolean!
    $tags: [String]
    $title: String!
  ) {
  articleCreate(article: {
    title: $title,
    author: $author,
    tags: $tags,
    content: $content,
    published: $published,
    excerpt: $excerpt
  }) {
    id
    title
    author
    tags
    content
    published
    excerpt
  }
}`;

export const ARTICLES_UPDATE = `mutation ArticleUpdate(
  $id: String!
  $author: String!
  $content: String!
  $published: Boolean!
  $tags: [String]
  $title: String!
  ) {
  articleUpdate(id: $id, article: {
    title: $title,
    author: $author,
    tags: $tags,
    content: $content,
    published: $published
  }) {
    id
    title
    author
    tags
    content
    published
    excerpt
  }
}`;

export const ARTICLES_DELETE = `mutation ArticleDelete($id: String!) {
  articleDelete(id: $id) {
    id
  }
}`;

