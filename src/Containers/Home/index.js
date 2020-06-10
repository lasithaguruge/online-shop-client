import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../../Components/TopMenu';

class Home extends Component {

  render() {
    return (
      <div>
        <Container textAlign='justified'>
          <TopMenu />
        </Container>
      </div>
    )
  }
}

export default Home;