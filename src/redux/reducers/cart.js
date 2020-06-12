import { combineReducers } from 'redux';

const cartItems = (state= [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { item, quantity, uom, orderItemId } = action;
      const cart = state;
      const newCart = cart ? [ ...state ] : [];
      const orderItem = createNewCartItem(orderItemId, item, quantity, uom);

      newCart.push(orderItem);
      return newCart;
    }
    case 'UPDATE_CART': {
      const cart = state;
      if (!cart) return state;

      const { orderItemId, field, value } = action;
      const newCart = [ ...state ];
      updateCartItem(newCart, orderItemId, field, value);

      return newCart;
    }
    default:
      return state;
  }
}

const cart = combineReducers({
  cartItems
});

export default cart;

export const getCartItems = state => state.cartItems || [];

const createNewCartItem = (orderItemId, item, quantity, uom) => {
  return { id: orderItemId, item, quantity, uom };
};

const updateCartItem = (cartItems, orderItemId, field, value) => {
  const itemIndex = cartItems.findIndex(item => item.id === orderItemId);

  if (itemIndex === -1) return;

  if (field === 'quantity' && value === 0) {
    cartItems.splice(itemIndex, 1);
    return;
  }

  const item = cartItems[itemIndex];
  item[field] = value;
};