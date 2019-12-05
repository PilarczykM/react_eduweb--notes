const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export { removeItem, addItem };
