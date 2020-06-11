import { combineReducers } from 'redux';
import { dummyData } from './dummyData';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS': {
      const newState = { ...state };
      if (action.items) action.items.forEach(item => { newState[item.id] = item });
      return newState;
    }
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEMS': {
      const newState = [ ...state ];
      if (action.items) action.items.forEach(item => { 
        if (!newState.includes(item.id)) newState.push(item.id); 
      });

      return newState;
    }
    default:
      return state;
  }
};

const items = combineReducers({
  byId,
  ids
});

export default items;

export const getItems = state => {
  return dummyData;
  // state.ids.map(id => state.byId[id]);
}