import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, List } from 'semantic-ui-react';
import { getCartItems } from '../../redux/reducers';
import CartItemCard from '../Item/CartItemCard';

class Cart extends Component {

  render() {
    const { button, cartItems } = this.props;

    return (
      <Modal trigger={cartItems && cartItems.length > 0 && button}>
        <Modal.Header>Cart</Modal.Header>
        <Modal.Content scrolling>
        <List verticalAlign='middle'>
          {cartItems.map(item => <CartItemCard key={item.id} orderItem={item} />)}
        </List>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Checkout <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return { cartItems: getCartItems(state) };
}

export default connect(mapStateToProps, null)(Cart);