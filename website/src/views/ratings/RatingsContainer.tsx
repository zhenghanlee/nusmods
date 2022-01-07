import RatingMenu from './RatingMenu';
import ReviewList from './ReviewList';
import { reviews } from './types';

const RatingsContainer = () => (
  <div>
    <RatingMenu reviews={reviews} />
    <ReviewList reviews={reviews} />
  </div>
);

export default RatingsContainer;
