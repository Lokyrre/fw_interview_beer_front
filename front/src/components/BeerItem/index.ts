import { connect } from 'react-redux';
import { beerActions } from '../../redux/state/beers';
import { BeerItem } from './BeerItem';

export default connect(
  () => {
    return {};
  },
  { rateBeer: beerActions.rateBeer }
)(BeerItem);