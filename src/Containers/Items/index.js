import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Header, List } from 'semantic-ui-react';
import ItemCard from '../../Components/Cards/ItemCard';
import { getItems } from '../../redux/reducers';

class ItemList extends Component {
  state = { 
    cartItems: [] 
  }
  
  handleOnClickItemQuantityChange = (action, itemId, value) => {
    console.log("handleOnClickItemQuantityChange ", action, itemId, value)
  }

  handleOnChange = (key, itemId, value) => {
    console.log("handleOnChange ", key,  itemId, value)
  }

  handleAddToCart = (itemId) => {
    console.log("handleAddToCart ", itemId)
  }

  render() {
    return (
      <div>
        <Header as='h3'>Products</Header>
        <Divider />
        <List verticalAlign='middle'>
          {this.props.items.map(item => {
            return <ItemCard 
              key={item.id} 
              item={item}
              onHandleClickItemQuantityChange={this.handleOnClickItemQuantityChange}
              onHandleChange={this.handleOnChange}
              onHandleAddToCart={this.handleAddToCart} />
          })}
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: getItems(state) };
}

export default connect(mapStateToProps, {})(ItemList);