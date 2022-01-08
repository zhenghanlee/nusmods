import { useState } from 'react';
import classnames from 'classnames';
import RatingBarWithTitle from './RatingBarWithTitle';
import { Review } from './types';

type Props = {
  review: Review;
};

const ReviewComment = (props: Props) => {
  const [seeMore, setSeeMore] = useState(false);

  const SeeMoreButton = () => (
    <button
      style={{ marginTop: '10px' }}
      onClick={() => setSeeMore(!seeMore)}
      type="button"
      className={classnames('btn', {
        'btn-primary': seeMore,
        'btn-outline-primary': !seeMore,
      })}
    >
      {seeMore ? 'See Less' : 'See More'}
    </button>
  );

  const RatingRow = () => (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <RatingBarWithTitle title="Workload" rating={props.review.workload} />
      <RatingBarWithTitle title="Difficulty" rating={props.review.difficulty} />
      <RatingBarWithTitle title="Teaching Staff" rating={props.review.teachingStaff} />
    </div>
  );

  return (
    <div
      style={{
        padding: '10px',
        marginTop: '18px',
        marginBottom: '18px',
        borderRadius: '8px',
        border: '1px solid var(--gray-lighter)',
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '25%', fontSize: 17, fontWeight: 'bold' }}>{props.review.name}</div>
        <RatingRow />
      </div>
      <div style={{ whiteSpace: 'pre-line' }}>
        {seeMore || props.review.review.length <= 300
          ? props.review.review
          : `${props.review.review.substring(0, 300)}...`}
      </div>
      {props.review.review.length > 300 ? <SeeMoreButton /> : <></>}
    </div>
  );
};

export default ReviewComment;
