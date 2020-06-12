import React, { Component } from 'react';
import { Button, Item, Input, Grid, Dropdown } from 'semantic-ui-react';
import { v4 as uuid4 } from 'uuid';
import { connect } from 'react-redux';
import { addToCart, updateCart } from '../../actions/cart';
import { getCart } from '../../redux/reducers';

const options = [
  { key: 1, text: 'Unit', value: 'unit' },
  { key: 2, text: 'Carton', value: 'carton' }
]

class ItemCard extends Component {
  state = { 
    quantity: 0,
    uom: 'unit'
  }

  componentWillReceiveProps = nextProps => console.log("CART ", nextProps.cart)

  onQuantityChange = value => {
    this.setState({ quantity: this.state.quantity + value }, this.handleAddToCart);
  }

  onUOMChange = value => {
    this.setState({ uom: value }, this.handleAddToCart);
  }


  handleAddToCart = () => {
    const { item, addToCart, updateCart } = this.props;
    const { quantity, uom } = this.state;

    if (!this.orderItemId) {
      this.orderItemId = uuid4();
      addToCart(this.orderItemId, item, quantity, uom);
    } else {
      updateCart(this.orderItemId, quantity, uom);
    }

    this.handleResetItemState();
  }

  handleResetItemState = () => {
    if (this.addToCartTimeout) clearTimeout(this.addToCartTimeout);

    this.addToCartTimeout = setTimeout(() => {
      this.orderItemId = null;
      this.setState({ quantity: 0, uom: 'unit' });
    }, 5000);
  }

  render() {
    const { item } = this.props;
    const { quantity, uom } = this.state;

    return <Grid columns={4} divided='vertically'>
      <Grid.Row>
        <Grid.Column>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{item.name}</Item.Header>
              <Item.Description>{item.description}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>
        <Grid.Column style={{ marginTop: 5 }}>
          <Grid columns={4}>
            <Grid.Column width={2}><Button circular icon='plus' size='mini' onClick={(e) => this.onQuantityChange(1)} /></Grid.Column>
            <Grid.Column width={4}><Input value={quantity} size='mini' style={{ width: 64 }} onChange={(e) => this.onQuantityChange(e.target.value)}/></Grid.Column>
            <Grid.Column width={2}><Button circular icon='minus' size='mini' onClick={(e) => quantity > 0 && this.onQuantityChange(-1)} /></Grid.Column>
            <Grid.Column style={{ margin: 5 }} width={7} >
              <Dropdown options={options} value={uom} onChange={(e, option) => this.onUOMChange(option.value)} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column></Grid.Column>
        {/* <Grid.Column
          width={1}
          style={{ marginTop: 5, marginRight: 10 }}
          floated='right'
        ><Button size='mini' onClick={() => onHandleAddToCart(item.id)}>Add</Button>
        </Grid.Column> */}
      </Grid.Row>
    </Grid>
  }
}

const mapStateToProps = state => {
  return { cart: getCart(state) };
}

export default connect(mapStateToProps, { addToCart, updateCart })(ItemCard);