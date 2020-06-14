import React, { Component } from 'react';
import { Item, Grid } from 'semantic-ui-react';

class PriceListCard extends Component {

  render() {
    const { item = {} } = this.props;
    const { name, description, price, noOfUnits } = item;
    console.log("PRICE ITEM ", item)
    return <Grid columns={4} divided='vertically'>
      <Grid.Row>
        <Grid.Column>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{name}</Item.Header>
              <Item.Description>{description}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column width={4} style={{ marginTop: 5 }} floated='right'>
          {noOfUnits}
        </Grid.Column>
        <Grid.Column
          width={1}
          style={{ marginTop: 5, marginRight: 10 }}
          floated='right'
        >
          {price}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}

export default PriceListCard;