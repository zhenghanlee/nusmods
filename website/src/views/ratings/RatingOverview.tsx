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
  const average = reviews.reduce((a, b) => a + b[type], 0) / reviews.length || 0;
  reviews.forEach((e) => {
    count[Math.abs(e[type] - 5)] += 1;
  });
  return (
    <div className={styles.ratingOverview}>
      <div style={{ lineHeight: '12px' }}>{name}</div>Rating Overview
      <div style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span style={{ fontWeight: 'bolder', fontSize: '2rem' }}>{average.toFixed(1)}</span>
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
        {ratings &&
          ratings.map((value, index) => (
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
                <div style={{ paddingLeft: '6px' }}>{`${count[index]}`}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RatingOverview;
