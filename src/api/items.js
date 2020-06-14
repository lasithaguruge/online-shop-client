import Api from './const';

export const getAll = () => {
  const { url, method, headers } = Api.items.getAll;
  
  window.fetch(url(), { method, headers })
  .then(response => response.json())
  .then(responseJson => {
    console.log('RESPONSE ',responseJson.data);
    return responseJson.data;
  }).catch(_ => {
    return { error: 'An error occured while connecting to the server.' };
  });
}
