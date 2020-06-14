import { combineReducers } from 'redux';
import items, * as fromItems from './items';
import cart, * as fromCart from './cart';
import priceList, * as fromPriceList from './priceList';


const rootReducer = combineReducers({
  items,
  cart,
  priceList
});

export default rootReducer;

export const getItems = state => fromItems.getItems(state.items);

export const getCartItems = state => fromCart.getCartItems(state.cart);

export const getPriceListItems = state => fromPriceList.getPriceListItems(state.priceList);