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

    case 'INVALIDATE ARTICLES':
      return {
        ...state,
        listItems: [],
        itemsShowed: []
      };

    case 'GET ARTICLES':
      return {
        ...state,
        isRequestingItems: true,
      };

    case 'SET ARTICLES':
      return {
        ...state,
        isRequestingItems: false,
        listItems: [...action.payload.items]
      };

    case 'GET ARTICLE':
      return {
        ...state,
        isRequestingItem: true,
      };

    case 'SET ARTICLE':
      return {
        ...state,
        isRequestingItem: false,
        itemsShowed: add(state.itemsShowed, action.payload.item),
      };

    default:
      return state;
  }
};
