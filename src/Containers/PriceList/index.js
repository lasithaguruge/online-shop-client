import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Dimmer, Header, List, Loader, Segment } from 'semantic-ui-react';
import PriceListCard from '../../Components/Cards/PriceListCard';
import { fetchPriceList } from '../../actions/items';
import { getPriceListItems } from '../../redux/reducers';

class ItemList extends Component {
  state = { 
    loading: false
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    this.props.fetchPriceList().then(() => {
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
        <Header as='h3'>Prices</Header>
        <Divider />
        <List verticalAlign='middle'>
          {this.props.priceList.map(item => {
            return <PriceListCard 
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
  return { priceList: getPriceListItems(state) };
}

export default connect(mapStateToProps, { fetchPriceList })(ItemList);