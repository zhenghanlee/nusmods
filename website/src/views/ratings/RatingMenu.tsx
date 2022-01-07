import React, { useState } from 'react';
import RatingOverview from './RatingOverview';
import { Review, menuOptions, workload, difficulty, teachingStaff } from './types';
import styles from './RatingMenu.scss';

interface RatingMenuProps {
  reviews: Review[];
}

const RatingMenu = ({ reviews }: RatingMenuProps) => {
  const [menu, setMenu] = useState(menuOptions[0]);
  const workloadAvg = reviews.reduce((a, b) => a + b.workload, 0) / reviews.length || 1;
  const difficultyAvg = reviews.reduce((a, b) => a + b.difficulty, 0) / reviews.length || 1;
  const teachingStaffAvg = reviews.reduce((a, b) => a + b.teachingStaff, 0) / reviews.length || 1;

  return (
    <div className={styles.ratingMenu}>
      <div>
        <button
          type="button"
          className={menu.value === menuOptions[0].value ? styles.ratingMenuActive : ''}
          onClick={() => setMenu(menuOptions[0])}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '20px' }}>
            <span>
              Weekly <br /> Workload
            </span>
            <div
              className="progress"
              style={{ height: '20px', width: '120px', marginLeft: '10px', marginRight: '5px' }}
            >
              <div
                className="progress-bar"
                style={{ width: `${(workloadAvg / 5) * 100}%`, backgroundColor: '#F99157' }}
              />
            </div>
            <span style={{ fontWeight: 'bold' }}>{workloadAvg.toFixed(1)}</span>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {workload[Math.round(workloadAvg) as keyof typeof workload]}
          </span>
        </button>
        <button
          type="button"
          className={menu.value === menuOptions[1].value ? styles.ratingMenuActive : ''}
          onClick={() => setMenu(menuOptions[1])}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '20px' }}>
            <span>
              Content <br /> Difficulty
            </span>
            <div
              className="progress"
              style={{ height: '20px', width: '120px', marginLeft: '10px', marginRight: '5px' }}
            >
              <div
                className="progress-bar"
                style={{ width: `${(difficultyAvg / 5) * 100}%`, backgroundColor: '#F99157' }}
              />
            </div>
            <span style={{ fontWeight: 'bold' }}>{difficultyAvg.toFixed(1)}</span>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {difficulty[Math.round(difficultyAvg) as keyof typeof difficulty]}
          </span>
        </button>
        <button
          type="button"
          className={menu.value === menuOptions[2].value ? styles.ratingMenuActive : ''}
          onClick={() => setMenu(menuOptions[2])}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '20px' }}>
            <span>
              Teaching <br /> Staff
            </span>
            <div
              className="progress"
              style={{ height: '20px', width: '120px', marginLeft: '10px', marginRight: '5px' }}
            >
              <div
                className="progress-bar"
                style={{ width: `${(teachingStaffAvg / 5) * 100}%`, backgroundColor: '#F99157' }}
              />
            </div>
            <span style={{ fontWeight: 'bold' }}>{teachingStaffAvg.toFixed(1)}</span>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {teachingStaff[Math.round(teachingStaffAvg) as keyof typeof teachingStaff]}
          </span>
        </button>
      </div>
      <RatingOverview reviews={reviews} name={menu.name} type={menu.value} />
    </div>
  );
};

export default RatingMenu;
