import React from 'react'
import { Button, Grid, Header, Icon, Segment, } from 'semantic-ui-react'

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder>
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon disabled>
            <Icon name='cart' />
            Look like you haven't made your choice yet 
          </Header>
          <Button color='teal'>Add Items</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default SegmentExamplePlaceholderGrid