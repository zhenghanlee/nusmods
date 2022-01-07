import React from 'react';
import * as types from './types';

import styles from './RatingOverview.scss';

interface RatingOverviewProps {
  name: string;
  reviews: types.Review[];
  type: 'workload' | 'difficulty' | 'teachingStaff';
}

const RatingOverview = ({ name, reviews, type }: RatingOverviewProps) => {
  const ratings: (1 | 2 | 3 | 4 | 5)[] = [5, 4, 3, 2, 1];
  const count = [0, 0, 0, 0, 0];
  const average = reviews.reduce((a, b) => a + b[type], 0) / reviews.length;
  reviews.forEach((e) => {
    count[e[type]] += 1;
  });
  return (
    <div className={styles.ratingOverview}>
      {name} Rating Overview
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span style={{ fontWeight: 'bolder', fontSize: '2rem' }}>{average}</span>
          /5
          <div style={{ paddingLeft: '10px', textAlign: 'center' }}>
            <div className="progress" style={{ height: '20px', width: '120px' }}>
              <div
                className="progress-bar"
                style={{ width: `${(average / 5) * 100}%`, backgroundColor: '#F99157' }}
              />
            </div>
            {reviews.length} ratings
          </div>
        </div>
      </div>
      <div>
        {ratings.map((value, index) => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ minWidth: '100px' }}>{`${value} (${types[type][value]})`}</div>
              <div className="progress" style={{ height: '6px', width: '100px' }}>
                <div
                  className="progress-bar"
                  style={{
                    width: `${(count[index] / reviews.length) * 100}%`,
                    backgroundColor: '#fec130',
                  }}
                />
              </div>
              <div style={{ paddingLeft: '6px' }}>{`${count[count.length - 1 - index]}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingOverview;
