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
    case 'UPDATE_QUANTITY': {
      const cart = state;
      if (!cart) return state;

      const { orderItemId, quantity, uom } = action;
      const newCart = [ ...state ];
      updateItemQuantity(newCart, orderItemId, quantity, uom);

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

export const getCart = state => state.cartItems || [];

const createNewCartItem = (orderItemId, item, quantity, uom) => {
  return { id: orderItemId, item, quantity, uom };
};

const updateItemQuantity = (cart, orderItemId, quantity, uom) => {

  const itemIndex = cart.findIndex(item => item.id === orderItemId);

  if (itemIndex === -1) return;

  const item = cart[itemIndex];
  item.quantity = quantity;
  item.uom = uom;
};