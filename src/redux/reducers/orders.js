import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCEED_ORDER_AMOUNT_CALCULATION': {
      const newState = { ...state };
      if (action.order) newState[action.order.id] = action.order;
      return newState;
    }
    default:
      return state;
  }
};

const orders = combineReducers({
  byId
});

export default orders;

export const getOrder = state => state.byId && Object.values(state.byId) && Object.values(state.byId)[0];