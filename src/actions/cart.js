export const addToCart = (orderItemId, item, quantity, uom) => dispatch => dispatch({
  type: 'ADD_TO_CART',
  item,
  quantity,
  orderItemId,
  uom
});

export const updateCart = (orderItemId, field, value) => dispatch => dispatch({
  type: 'UPDATE_CART',
  orderItemId,
  field,
  value
});