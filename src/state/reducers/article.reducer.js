function add(items, newItem) {
  const index = items.findIndex(item => item.id === newItem.id);

  if (index === -1) {
    return [...items, newItem];
  } else {
    return [...items.slice(0, index), newItem, ...items.slice(index + 1)]
  }
}

export const articleReducer = (state, action) => {
  switch (action.type) {
    case '[articleList] requestItems':
      return {
        ...state,
        isRequestingItems: true,
      };

    case '[articleList] itemsRequested':
      return {
        ...state,
        isRequestingItems: false,
        listItems: [...action.payload.items]
      };

    case '[showedArticles] requestItem':
      return {
        ...state,
        isRequestingItem: true,
      };

    case '[showedArticles] itemRequested':
      return {
        ...state,
        isRequestingItem: false,
        showedItems: add(state.showedArticles.items, action.payload.item),
        selectedItem: action.payload.item
      };

    default:
      return state;
  }
};
