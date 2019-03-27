function add(items, newItem) {
  const index = items.findIndex(item => item.id === newItem.id);

  if (index === -1) {
    return [...items, newItem];
  } else {
    return [...items.slice(0, index), newItem, ...items.slice(index + 1)]
  }
}

function remove(items, deletedItemId) {
  const index = items.findIndex(item => item.id === deletedItemId);

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
        itemList: [],
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
        itemList: [...action.articles]
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
        itemList: add(state.itemsShowed, action.article)
      };

    case 'ASK DELETE ARTICLE':
      return {
        ...state,
        askDeleteItem: action.askDeleteItem,
      };

    case 'DELETING ARTICLE':
      return {
        ...state,
        isDeletingItem: action.isDeletingItem,
      };

    case 'ARTICLE DELETED':
      return {
        ...state,
        askDeleteItem: false,
        isDeletingItem: false,
        itemsShowed: remove(state.itemsShowed, action.id),
        itemList: remove(state.itemsShowed, action.id)
      };

    default:
      return state;
  }
};
