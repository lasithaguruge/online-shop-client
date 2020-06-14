import Api from './const';

export const getOrderAmount = order => {
  const { url, method, headers } = Api.orders.getOrderAmount;
  const body = JSON.stringify(order);
  
  return window.fetch(url(), { body, method, headers })
  .then(response => response.json())
  .then(responseJson => {
    return responseJson;
  }).catch(_ => {
    return { error: 'An error occured while connecting to the server.' };
  });
}
