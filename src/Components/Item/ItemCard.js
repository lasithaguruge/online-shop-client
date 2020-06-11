import React from 'react'
import { Button, Item, Input, Grid, Form, Radio } from 'semantic-ui-react'

export const ItemCard = props => {
  const { item } = props;

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
      <Grid.Column>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={3} textAlign='justified'>
              <Form.Field>
                <Radio
                  label='Carton'
                  name='radioGroup'
                  value='CARTON'
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={3} >
              <Form.Field>
                <Radio
                  label='Unit'
                  name='radioGroup'
                  value='UNIT'
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={1}><Button circular icon='plus' size='mini' /></Grid.Column>
            <Grid.Column width={2} ><Input size='mini' style={{ width: 65 }} /></Grid.Column>
            <Grid.Column width={1}><Button circular icon='minus' size='mini' /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}
