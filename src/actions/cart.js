export const addToCart = (orderItemId, item, quantity, uom) => dispatch => dispatch({
  type: 'ADD_TO_CART',
  item,
  quantity,
  orderItemId
});

export const updateCart = (orderItemId, quantity, uom) => dispatch => dispatch({
  type: 'UPDATE_QUANTITY',
  orderItemId,
  quantity,
  uom
});