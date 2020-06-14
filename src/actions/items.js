import { getAll } from '../api/items';

export const fetchItems = () => dispatch => {
  return getAll().then(response => {
    if (!response.error) dispatch({ type: 'SUCCEED_FETCH_ITEMS', items: response.items });
    return response;
  });
};