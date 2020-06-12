import React, { Component } from 'react';
import { Button, Item, Input, Grid, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateCart } from '../../actions/cart';

const options = [
  { key: 1, text: 'Unit', value: 'unit' },
  { key: 2, text: 'Carton', value: 'carton' }
]

class ItemCard extends Component {
  state = { 
    quantity: 0,
    uom: 'unit'
  }

  componentDidMount = () => {
    const { orderItem: { quantity, uom } } = this.props;

    this.setState({ quantity, uom });
  }

  onQuantityChange = value => {
    this.setState({ quantity: this.state.quantity + value }, () => this.handleUpdateCart('quantity'));
  }

  onUOMChange = value => {
    this.setState({ uom: value }, () => this.handleUpdateCart('uom'));
  }

  handleUpdateCart = field => {
    const { orderItem, updateCart } = this.props;
    const { quantity, uom } = this.state;

    if (field === 'uom') updateCart(orderItem.id, field, uom);
    else updateCart(orderItem.id, field, quantity);
  }

  render() {
    const { orderItem: { item } } = this.props;
    const { quantity, uom } = this.state;

    return <Grid columns={2} divided='vertically'>
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
      </Grid.Row>
    </Grid>
  }
}

export default connect(null, { updateCart })(ItemCard);