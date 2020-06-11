import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{ marginTop: 20 }}>
            <Root />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;