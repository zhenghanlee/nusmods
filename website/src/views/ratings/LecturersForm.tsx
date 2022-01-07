import { FC } from 'react';
// import classnames from 'classnames';
// import styles from './LecturersForm.scss';

type Props = {
  isEditing: boolean;
  lecturers: string;
  onChangeHandler: React.FormEventHandler<HTMLTextAreaElement>;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
};

const LecturersForm: FC<Props> = (props) => (
  <form onSubmit={props.onSubmitHandler}>
    <div
      className="form-group"
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingRight: '0.75rem',
        }}
      >
        <label htmlFor="lecturers" style={{ textAlign: 'center' }}>
          Lecturer(s)
        </label>
        <button
          className="btn btn-outline-primary"
          type="submit"
          style={{
            width: '100%',
          }}
        >
          {props.isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <textarea
        className="form-control"
        id="lecturers"
        value={props.lecturers}
        onChange={props.onChangeHandler}
        disabled={!props.isEditing}
        rows={3}
      />
    </div>
  </form>
);

export default LecturersForm;
