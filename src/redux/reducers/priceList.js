import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCEED_FETCH_PRICE_LIST': {
      const newState = { ...state };
      if (action.prices) action.prices.forEach(item => { newState[item.id] = item });
      return newState;
    }
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case 'SUCCEED_FETCH_PRICE_LIST': {
      const newState = [ ...state ];
      if (action.prices) action.prices.forEach(item => { 
        if (!newState.includes(item.id)) newState.push(item.id); 
      });

      return newState;
    }
    default:
      return state;
  }
};

const priceList = combineReducers({
  byId,
  ids
});

export default priceList;

export const getPriceListItems = state => state.ids.map(id => state.byId[id]);