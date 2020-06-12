import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Menu, Segment } from 'semantic-ui-react';
import Cart from '../Cart';

class TopMenu extends Component {
  state = { activeItem: 'Products' }

  handleItemClick = (e, { name }) => {
    this.props.history.replace('/' + name.toLowerCase())
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment color='teal'>
        <Menu secondary color={'teal'}>
          <Menu.Item
            name='Products'
            active={activeItem === 'Products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Prices'
            active={activeItem === 'Prices'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Cart button={
              <Menu.Item
                name='Cart'
                active={activeItem === 'Cart'}
              >
                <Icon name='cart' /> Cart
          </Menu.Item>
            } />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(TopMenu);