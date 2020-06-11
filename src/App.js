import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Root from './Root';
import store from './store';
import TopMenu from './Components/TopMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container style={{ marginTop: 15 }}>
            <TopMenu />
              <div style={{ marginTop: 30, padding: 15 }}>
                <Root />
              </div>
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;