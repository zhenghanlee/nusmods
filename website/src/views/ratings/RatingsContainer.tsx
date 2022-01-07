import ReviewList from './ReviewList';
import { reviews } from './types';

const RatingsContainer = () => (
  <div>
    <ReviewList reviews={reviews} />
  </div>
);

export default RatingsContainer;
