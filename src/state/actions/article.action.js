
export function invalidateArticle() {
  return {
    type: 'INVALIDATE ARTICLES',
  }
}

export function requestingArticles() {
  return {
    type: 'GET ARTICLES'
  }
}

export function setArticles(payload) {
  return {
    type: 'SET ARTICLES',
    payload: payload
  }
}

export function requestingArticle(id) {
  return {
    type: 'GET ARTICLE'
  }
}

export function setArticle(payload) {
  return {
    type: 'SET ARTICLE',
    payload: payload
  }
}
