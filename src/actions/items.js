import { getAll, getPriceList } from '../api/items';

export const fetchItems = () => dispatch => {
  return getAll().then(response => {
    if (!response.error) dispatch({ type: 'SUCCEED_FETCH_ITEMS', items: response });
    return response;
  });
};

export const fetchPriceList = () => dispatch => {
  return getPriceList().then(response => {
    if (!response.error) dispatch({ type: 'SUCCEED_FETCH_PRICE_LIST', prices: response });
    return response;
  });
};