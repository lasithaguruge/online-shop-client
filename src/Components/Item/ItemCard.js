import React from 'react';
import { Button, Item, Input, Grid, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Unit', value: 'unit' },
  { key: 2, text: 'Carton', value: 'carton' }
]

export const ItemCard = props => {
  const { item, uom = 'unit', onHandleChange, onHandleClickItemCount, onHandleAddToCart } = props;

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
          <Grid.Column width={2}><Button circular icon='plus' size='mini' onClick={(value) => onHandleClickItemCount('INCREASE', value)}/></Grid.Column>
          <Grid.Column width={4}><Input size='mini' style={{ width: 64 }}/></Grid.Column>
          <Grid.Column width={2}><Button circular icon='minus' size='mini' onClick={(value) => onHandleClickItemCount('DECREASE', value)}/></Grid.Column>
          <Grid.Column style={{ margin: 5 }} width={7} >
            <Dropdown options={options} value={uom} onChange={onHandleChange} />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column></Grid.Column>
      <Grid.Column 
        width={1} 
        style={{ marginTop: 5, marginRight: 10 }} 
        floated='right'
      ><Button size='mini' onClick={onHandleAddToCart}>Add</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}
