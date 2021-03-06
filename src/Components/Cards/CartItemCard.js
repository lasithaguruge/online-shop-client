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

  onQuantityChange = evt => {
    if (evt.target.validity.valid) {
      this.setState({ quantity: evt.target.value }, () => this.handleUpdateCart('quantity'))
    }
  }

  onClickQuantityChange = value => this.setState({ quantity: parseInt(this.state.quantity) + parseInt(value) }, () => this.handleUpdateCart('quantity'))

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
    const { uom, quantity } = this.state;

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
        {/* <Grid.Column style={{ marginTop: 5 }}>
          <Grid columns={4}>
            <Grid.Column width={2}><Button circular icon='plus' size='mini' color='teal' onClick={(e) => this.onQuantityChange(1)} /></Grid.Column>
            <Grid.Column width={3}><Input value={quantity} size='mini' style={{ width: 64 }} onChange={(e) => this.onQuantityChange(e.target.value)}/></Grid.Column>
            <Grid.Column width={2}><Button circular icon='minus' size='mini' color='teal' onClick={(e) => quantity > 0 && this.onQuantityChange(-1)} /></Grid.Column>
            <Grid.Column style={{ margin: 5 }} width={7} >
              <Dropdown options={options} value={uom} onChange={(e, option) => this.onUOMChange(option.value)} />
            </Grid.Column>
          </Grid>
        </Grid.Column> */}
        <Grid.Column width={5} style={{ marginTop: 5 }} floated='right'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button circular icon='plus' size='mini' color='teal' onClick={(e) => this.onClickQuantityChange(1)} />
            <Input type="text" pattern="[0-9]*" size='mini' style={{ width: 85 }} value={quantity} onChange={(e) => this.onQuantityChange(e)} />
            <Button circular icon='minus' size='mini' color='teal' onClick={(e) => quantity > 0 && this.onClickQuantityChange(-1)} />
            <Dropdown style={{ width: 70 }} options={options} value={uom} onChange={(e, option) => this.onUOMChange(option.value)} />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}

export default connect(null, { updateCart })(ItemCard);