import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../../Components/TopMenu';
import ItemList from '../Items';

class Home extends Component {

  render() {
    return (
      <div>
        <Container textAlign='justified'>
          <TopMenu />
          <ItemList />
        </Container>
      </div>
    )
  }
}

export default Home;