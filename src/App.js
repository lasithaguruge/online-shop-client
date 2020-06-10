import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ marginTop: 20 }}>
          <Root />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;