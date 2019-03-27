
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

export function setArticles({articles}) {
  return {
    type: 'SET ARTICLES',
    articles
  }
}

export function requestingArticle() {
  return {
    type: 'GET ARTICLE'
  }
}

export function setArticle({article}) {
  return {
    type: 'SET ARTICLE',
    article
  }
}

export function editingArticle({isEditing, article}) {
  return {
    type: 'EDIT ARTICLE',
    isEditing,
    article
  }
}

export function savingArticle(article) {
  return {
    type: 'SAVING ARTICLE',
    article
  }
}

export function articleSaved({article}) {
  return {
    type: 'ARTICLE SAVED',
    article
  }
}

export function deletingArticle({article}) {
  return {
    type: 'DELETING ARTICLE',
    article
  }
}

export function articleDeleted() {
  return {
    type: 'ARTICLE DELETED',
  }
}
