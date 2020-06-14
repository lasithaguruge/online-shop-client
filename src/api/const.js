
export default class Api { }

const host = 'localhost:8080';
Api.server = 'http://' + host + '/api';

Api.orderService = Api.server + '/orders';
Api.itemService = Api.server + '/items';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

Api.orders = {
  getOrderAmount: {
    url: () => Api.orderService + '/priceEngine',
    method: 'POST',
    headers: HEADERS
  }
};

Api.items = {
  getAll: {
    url: () => Api.itemService,
    method: 'GET',
    headers: HEADERS
  },
  getPriceList: {
    url: () => Api.itemService + '/prices',
    method: 'GET',
    headers: HEADERS
  }
};