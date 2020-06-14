import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Dimmer, Grid, Header, Input, List, Loader, Segment } from 'semantic-ui-react';
import PriceListCard from '../../Components/Cards/PriceListCard';
import { fetchPriceList } from '../../actions/items';
import { getPriceListItems } from '../../redux/reducers';

class ItemList extends Component {
  state = { 
    loading: false,
    quantity: undefined,
    name: undefined
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    this.props.fetchPriceList().then(() => {
      this.setState({ loading: false })
    })
  }

  onQuantityChange = event => {
    if (event.target.validity.valid) {
      this.setState({ quantity: event.target.value })
    }
  }

  onNameChange = value => {
    this.setState({ name: value })
  }

  filteredList = () => {
    const { priceList = [] } = this.props;
    const { name, quantity } = this.state;
    let filteredItemsList = priceList;

    if (name && name.length > 0) {
      filteredItemsList = priceList.filter(item => {
        return item && item.name.toLowerCase().includes(name.toLowerCase())
      });
    }

    if (quantity) {
      filteredItemsList = filteredItemsList.filter(item => {
        return (item.noOfUnits === parseInt(quantity))
      });
    }

    return filteredItemsList;
  }

  render() {
    const { loading, quantity, name } = this.state;
    return (
      <Segment basic>
      <Dimmer active={loading} inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <div>
        <Header as='h3'>Prices</Header>
        <Grid columns={5} divided='vertically'>
          <Grid.Row>
            <Grid.Column><Input placeholder='Search by name' onChange={(e) => this.onNameChange(e.target.value)}/></Grid.Column>
            <Grid.Column><Input placeholder='Search by quantity' type="text" pattern="[0-9]*" value={quantity} onChange={(e) => this.onQuantityChange(e)} /></Grid.Column>
          </Grid.Row>
        </Grid>
        
        
        <Divider />
        <List verticalAlign='middle'>
          {this.filteredList().map(item => {
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