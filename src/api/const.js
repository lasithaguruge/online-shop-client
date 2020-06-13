
export default class Api { }

const host = 'localhost:8080';
Api.server = 'http://' + host + '/api';

Api.orderService = Api.server + '/orders';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

Api.orders = {
  url: () => Api.orderService,
  method: 'POST',
  headers: HEADERS
};