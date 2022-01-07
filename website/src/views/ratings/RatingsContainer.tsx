import * as axios from 'axios';
import React, { useState } from 'react';
import RatingMenu from './RatingMenu';
import ReviewList from './ReviewList';
import SubmissionContainer from './SubmissionContainer';
import LecturersContainer from './LecturersContainer';
import { Review, reviews, semesters } from './types';

const RatingsContainer = () => {
  const [semester, setSemester] = useState(semesters[0]);

  const onSubmit = (review: Review) => {
    const header = 'http://localhost:5000/modratings/us-central1/app';
    // TODO Find a way to get the module code and semester
    const moduleCode = '';
    const url = header + '/' + moduleCode + '/' + semester + '/reviews';
    axios.default
      .post(url, review)
      .then(function (response) {
        console.log(response);
        const modal = document.getElementById('submissionContainer');
        if (modal) modal.style.display = 'none';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LecturersContainer />
        <SubmissionContainer
          onSubmit={onSubmit}
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
