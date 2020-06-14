import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Icon, Modal, List } from 'semantic-ui-react';
import { calculateOrderAmount } from '../../actions/orders';
import { getCartItems, getOrder } from '../../redux/reducers';
import CartItemCard from '../Cards/CartItemCard';
import EmptyCart from '../EmptyMessages/EmptyCart';

class Cart extends Component {

  handleOrderCalculation = () => {
    const { cartItems } = this.props;

    this.props.calculateOrderAmount({ items: cartItems }).then(() => {

    })
  }

  render() {
    const { button, cartItems, order } = this.props;

    return (
      <Modal trigger={cartItems && cartItems.length > 0 && button}>
        <Modal.Header style={{ display: 'flex', justifyContent: 'space-between' }}><div>Cart</div><div>Total: {order && order.total ? order.total : 0}</div></Modal.Header>
        <Modal.Content scrolling>
          {cartItems.length > 0 ? <List verticalAlign='middle'>
            {cartItems.map(item => <CartItemCard key={item.id} orderItem={item} />)}
          </List> : <EmptyCart />}
        </Modal.Content>
        <Modal.Actions>
          <Button color='teal' onClick={() => this.handleOrderCalculation()}>
            Calculate order amount
          </Button>
          <Button color='teal'>
            Checkout <Icon name='chevron right'/>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return { cartItems: getCartItems(state), order: getOrder(state) };
}

export default withRouter(connect(mapStateToProps, { calculateOrderAmount })(Cart));