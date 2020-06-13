import React from 'react'
import { Grid, Header, Icon, Segment, } from 'semantic-ui-react'

const SegmentExamplePlaceholderGrid = () => (
  <Segment basic>
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon disabled>
            <Icon name='cart' />
            Your cart is empty
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default SegmentExamplePlaceholderGrid