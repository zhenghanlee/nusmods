import ReviewComment from './ReviewComment';
import { Review } from './types';

type Props = {
  reviews: Review[];
};

const ReviewList = (props: Props) => (
  <div>
    {props.reviews.map((r) => (
      <ReviewComment review={r} />
    ))}
  </div>
);

export default ReviewList;
