import React, { Component } from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'

export default class TopMenu extends Component {
  state = { activeItem: 'Products' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
          <Menu.Item
            name='Cart'
            active={activeItem === 'Cart'}
            onClick={this.handleItemClick}
          >
            <Icon name='cart' /> Cart
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Segment>
    )
  }
}