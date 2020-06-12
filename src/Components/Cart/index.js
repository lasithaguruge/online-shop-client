import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { getCart } from '../../redux/reducers';

class Cart extends Component {

  render() {
    return (
      <Modal trigger={this.props.button}>
        <Modal.Header>Cart</Modal.Header>
        <Modal.Content scrolling>

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
  return { cart: getCart(state) };
}

export default connect(mapStateToProps, null)(Cart);