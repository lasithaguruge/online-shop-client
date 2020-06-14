import { getOrderAmount } from '../api/orders';

export const calculateOrderAmount = (order) => dispatch => {
  return getOrderAmount(order).then(response => {
    if (!response.error) dispatch({ type: 'SUCCEED_ORDER_AMOUNT_CALCULATION', order: response });
    return response;
  });
};