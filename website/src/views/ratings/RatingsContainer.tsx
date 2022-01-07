import React from 'react';
import RatingMenu from './RatingMenu';
import { reviews } from './types';

const RatingsContainer = () => (
  <div>
    <RatingMenu reviews={reviews} />
  </div>
);

export default RatingsContainer;
