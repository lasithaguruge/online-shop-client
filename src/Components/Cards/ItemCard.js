import React, { Component } from 'react';
import { Button, Item, Input, Grid, Dropdown } from 'semantic-ui-react';
import { v4 as uuid4 } from 'uuid';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

const options = [
  { key: 1, text: 'Unit', value: 'unit' },
  { key: 2, text: 'Carton', value: 'carton' }
]

class ItemCard extends Component {
  state = {
    quantity: 0,
    uom: 'unit'
  }

  onQuantityChange = evt => {
    if (evt.target.validity.valid) {
      this.setState({ quantity: evt.target.value })
    }
  }

  onClickQuantityChange = value => this.setState({ quantity: parseInt(this.state.quantity) + parseInt(value) })

  onUOMChange = value => this.setState({ uom: value });


  handleAddToCart = () => {
    const { item, addToCart } = this.props;
    const { quantity, uom } = this.state;
    const orderItemId = uuid4();

    addToCart(orderItemId, item, quantity, uom);
    this.setState({ quantity: 0, uom: 'unit' });
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
        <Grid.Column></Grid.Column>
        <Grid.Column width={4} style={{ marginTop: 5 }} floated='right'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button circular icon='plus' size='mini' color='teal' onClick={(e) => this.onClickQuantityChange(1)} />
            <Input type="text" pattern="[0-9]*" size='mini' style={{ width: 85 }} value={quantity} onChange={(e) => this.onQuantityChange(e)} />
            <Button circular icon='minus' size='mini' color='teal' onClick={(e) => quantity > 0 && this.onClickQuantityChange(-1)} />
            <Dropdown style={{ width: 70 }} options={options} value={uom} onChange={(e, option) => this.onUOMChange(option.value)} />
          </div>
        </Grid.Column>
        <Grid.Column
          width={1}
          style={{ marginTop: 5, marginRight: 10 }}
          floated='right'
        ><Button size='mini' color='teal' disabled={quantity < 1} onClick={() => this.handleAddToCart()}>Add</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}

export default connect(null, { addToCart })(ItemCard);