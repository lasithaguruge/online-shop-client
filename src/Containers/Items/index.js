import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Header, List } from 'semantic-ui-react';
import { ItemCard } from '../../Components/Item/ItemCard';
import { getItems } from '../../redux/reducers/items';

class ItemList extends Component {

  render() {
    return (
      <div>
        <Header as='h3'>Products</Header>
        <Divider />
        <List verticalAlign='middle'>
          {this.props.items.map(item => <ItemCard key={item.id} item={item}/>)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: getItems(state) };
}

export default connect(mapStateToProps, {})(ItemList);