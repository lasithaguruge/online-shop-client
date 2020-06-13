import Api from './const';

export const addOrder = data => {
  const { url, method, headers } = Api.orders;
  const body = JSON.stringify(data);
  
  window.fetch(url(), { body, method, headers })
  .then(response => response.json())
  .then(responseJson => {
    console.log('RESPONSE ',responseJson.data);
    return responseJson.data;
  }).catch(_ => {
    return { error: 'An error occured while connecting to the server.' };
  });
}
