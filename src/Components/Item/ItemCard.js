import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

export const ItemCard = () => (
  <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
    <List.Content>Lena</List.Content>
  </List.Item>
)
