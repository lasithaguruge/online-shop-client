import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { ItemCard } from '../../Components/Item/ItemCard';

class ItemList extends Component {

  render() {
    return (
      <div>
        <List divided verticalAlign='middle'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </List>
      </div>
    )
  }
}

export default ItemList;