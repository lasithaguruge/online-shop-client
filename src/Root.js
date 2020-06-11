import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemList from './Containers/Items';

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route exact path="/products" component={ItemList} />
    </Switch>
  );
}

export default Root;