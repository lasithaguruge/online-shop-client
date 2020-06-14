import Api from './const';

export const getAll = () => {
  const { url, method, headers } = Api.items.getAll;
  
  return window.fetch(url(), { method, headers })
  .then(response => response.json())
  .then(responseJson => {
    return responseJson;
  }).catch(_ => {
    return { error: 'An error occured while connecting to the server.' };
  });
}
