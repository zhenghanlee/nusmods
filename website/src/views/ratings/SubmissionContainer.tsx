import Submission from './Submission';
import { Review } from './types';
import SemesterDropdown from './SemesterDropdown';
import styles from './SubmissionContainer.scss';

type SubmissionContainerProps = {
  onSubmit: (review: Review) => void;
  selectedSemester: string;
  semesters: string[];
  onClick: (e: string) => void;
};

const SubmissionContainer = ({
  onSubmit,
  selectedSemester,
  semesters,
  onClick,
}: SubmissionContainerProps) => {
  const onOpenButtonClick = () => {
    const modal = document.getElementById('submissionContainer');
    if (!modal) return;
    modal.style.display = 'block';
  };
  const onCloseButtonClick = () => {
    const modal = document.getElementById('submissionContainer');
    if (modal) modal.style.display = 'none';
  };
  return (
    <>
      <div style={{ width: '320px', paddingTop: '3px' }}>
        <SemesterDropdown value={selectedSemester} dropDown={semesters} onClick={onClick} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={onOpenButtonClick}
          style={{ width: '320px', marginTop: '3px' }}
        >
          Add Review
        </button>
      </div>
      <div
        className={styles.modal}
        id="submissionContainer"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="submissionContainer"
        aria-hidden={true}
      >
        <div className={styles.content} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{ display: 'inline-block', marginBottom: '0' }}>
                Add Review
              </h5>
              <button
                type="button"
                className="close"
                onClick={onCloseButtonClick}
                aria-label="Close"
              >
                <span aria-hidden={true}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Submission onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionContainer;
