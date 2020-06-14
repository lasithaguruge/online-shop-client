import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemList from './Containers/Items';
import PriceList from './Containers/PriceList';

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route exact path="/products" component={ItemList} />
      <Route exact path="/prices" component={PriceList} />
    </Switch>
  );
}

export default Root;