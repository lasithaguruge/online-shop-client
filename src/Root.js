import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemList from './Containers/Items';
import OrderSummary from './Containers/OrderSummary';

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route exact path="/products" component={ItemList} />
      <Route exact path="/orderSummary" component={OrderSummary} />
    </Switch>
  );
}

export default Root;