import RatingMenu from './RatingMenu';
import ReviewList from './ReviewList';
import SubmissionContainer from './SubmissionContainer';
import { reviews } from './types';

const RatingsContainer = () => (
  <div>
    {/* TODO add submit logic here */}
    <SubmissionContainer onSubmit={() => {}} />
    <RatingMenu reviews={reviews} />
    <ReviewList reviews={reviews} />
  </div>
);

export default RatingsContainer;
