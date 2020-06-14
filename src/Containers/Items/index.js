import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Dimmer, Header, List, Loader, Segment } from 'semantic-ui-react';
import ItemCard from '../../Components/Cards/ItemCard';
import { fetchItems } from '../../actions/items';
import { getItems } from '../../redux/reducers';

class ItemList extends Component {
  state = { 
    loading: false
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    this.props.fetchItems().then(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <Segment basic>
      <Dimmer active={loading} inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <div>
        <Header as='h3'>Products</Header>
        <Divider />
        <List verticalAlign='middle'>
          {this.props.items.map(item => {
            return <ItemCard 
              key={item.id} 
              item={item} />
          })}
        </List>
      </div>
    </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { items: getItems(state) };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);