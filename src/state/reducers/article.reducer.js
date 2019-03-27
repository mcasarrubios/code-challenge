function add(items, newItem) {
  const index = items.findIndex(item => item.id === newItem.id);

  if (index === -1) {
    return [...items, newItem];
  } else {
    return [...items.slice(0, index), newItem, ...items.slice(index + 1)]
  }
}

function remove(items, deletedItem) {
  const index = items.findIndex(item => item.id === deletedItem.id);

  if (index === -1) {
    return items;
  } else {
    return [...items.splice(index, 1)]
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
        listItems: [...action.articles]
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
        itemsShowed: add(state.itemsShowed, action.article),
      };

    case 'EDIT ARTICLE':
      return {
        ...state,
        isEditing: action.isEditing,
        itemsShowed: add(state.itemsShowed, action.article),
      };

    case 'SAVING ARTICLE':
      return {
        ...state,
        isSavingItem: true,
      };

    case 'ARTICLE SAVED':
      return {
        ...state,
        isSavingItem: false,
        itemsShowed: add(state.itemsShowed, action.article),
        listItems: add(state.itemsShowed, action.article)
      };

    case 'DELETING ARTICLE':
      return {
        ...state,
        isDeletingItem: true,
      };

    case 'ARTICLE DELETED':
      return {
        ...state,
        isDeletingItem: false,
        itemsShowed: remove(state.itemsShowed, action.article),
        listItems: remove(state.itemsShowed, action.article)
      };

    default:
      return state;
  }
};
