import { combineReducers } from 'redux';
import items, * as fromItems from './items';
import cart, * as fromCart from './cart';


const rootReducer = combineReducers({
  items,
  cart
});

export default rootReducer;

export const getItems = state => fromItems.getItems(state.items);

export const getCart = state => fromCart.getCart(state.cart);