import React, { Component } from 'react';
import { Divider, Header } from 'semantic-ui-react';

class Home extends Component {

  render() {
    return (
      <div>
        <Header as='h3'>Order summary</Header>
        <Divider />
      </div>
    )
  }
}

export default Home;