import * as axios from 'axios';
import React, { useState, useEffect } from 'react';
import RatingMenu from './RatingMenu';
import ReviewList from './ReviewList';
import SubmissionContainer from './SubmissionContainer';
import LecturersContainer from './LecturersContainer';
import { Review } from './types';

interface RatingContainterProps {
  moduleCode: string;
}

const RatingsContainer = ({ moduleCode }: RatingContainterProps) => {
  const [semesterList, setSemesterList] = useState([]);
  const [semester, setSemester] = useState('');
  const [lecturersList, setLecturersList] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const header = 'http://localhost:5000/modratings/us-central1/app/api/v1';
    const url = `${header}/${moduleCode.toLowerCase()}`;
    axios.default.get(url).then((res) => {
      setSemesterList(res.data.map((x: any) => x.id));
      setSemester(res.data[0].id);
      setLecturersList(res.data);
    });
  }, []);

  useEffect(() => {
    if (semester) {
      const header = 'http://localhost:5000/modratings/us-central1/app/api/v1';
      const url = `${header}/${moduleCode.toLowerCase()}/${semester}/reviews`;
      axios.default.get(url).then((res) => {
        setReviews(res.data);
      });
    }
  }, [semester]);

  const onSubmit = (review: Review) => {
    const header = 'http://localhost:5000/modratings/us-central1/app/api/v1';
    const url = `${header}/${moduleCode.toLowerCase()}/${semester}/reviews`;
    axios.default.post(url, review).then((res) => {
      console.log(res);
      const modal = document.getElementById('submissionContainer');
      if (modal) modal.style.display = 'none';
      axios.default.get(url).then((response) => {
        setReviews(response.data);
      });
    });
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <LecturersContainer
          moduleCode={moduleCode}
          semester={semester}
          lecturersList={lecturersList as any}
        />
        <SubmissionContainer
          onSubmit={onSubmit}
          selectedSemester={semester}
          semesters={semesterList}
          onClick={setSemester}
        />
      </div>
      <RatingMenu reviews={reviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default RatingsContainer;
