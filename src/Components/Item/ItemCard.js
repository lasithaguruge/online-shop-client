import React, { Component } from 'react';
import { Button, Item, Input, Grid, Dropdown } from 'semantic-ui-react';
import { v4 as uuid4 } from 'uuid';

const options = [
  { key: 1, text: 'Unit', value: 'unit' },
  { key: 2, text: 'Carton', value: 'carton' }
]

class ItemCard extends Component {
  state = { 
    quantity: 0,
    uom: 'unit'
  }

  onQuantityChange = value => {
    this.setState({ quantity: this.state.quantity + value });
  }

  handleAddToCart = () => {
    const { item, quantity, addToCart, updateQuantity } = this.props;

    if (!this.orderItemId) {
      this.orderItemId = uuid4();
      addToCart(item, quantity, this.orderItemId);
    } else {
      updateQuantity(this.orderItemId, quantity);
    }

    this.handleResetItemState();
  }

  handleResetItemState = () => {
    if (this.addToCartTimeout) clearTimeout(this.addToCartTimeout);

    this.addToCartTimeout = setTimeout(() => {
      this.orderItemId = null;
      this.setState({ quantity: 0 });
    }, 3000);
  }

  render() {
    const { item, onHandleChange } = this.props;
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
            <Grid.Column width={4}><Input value={quantity} size='mini' style={{ width: 64 }} /></Grid.Column>
            <Grid.Column width={2}><Button circular icon='minus' size='mini' onClick={(e) => quantity > 0 && this.onQuantityChange(-1)} /></Grid.Column>
            <Grid.Column style={{ margin: 5 }} width={7} >
              <Dropdown options={options} value={uom} onChange={(e) => onHandleChange('uom', e.target.value)} />
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

export default ItemCard;