import React, { useState } from 'react';
import RatingMenu from './RatingMenu';
import ReviewList from './ReviewList';
import SubmissionContainer from './SubmissionContainer';
import LecturersContainer from './LecturersContainer';
import { reviews, semesters } from './types';

const RatingsContainer = () => {
  const [semester, setSemester] = useState(semesters[0]);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LecturersContainer />
        <SubmissionContainer
          onSubmit={() => {}}
          selectedSemester={semester}
          semesters={semesters}
          onClick={setSemester}
        />
      </div>
      <RatingMenu reviews={reviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default RatingsContainer;
