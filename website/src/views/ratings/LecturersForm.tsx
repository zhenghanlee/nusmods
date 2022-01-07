import { FC } from 'react';

type Props = {
  isEditing: boolean;
  lecturers: string;
  onChangeHandler: React.FormEventHandler<HTMLTextAreaElement>;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
};

const LecturersForm: FC<Props> = (props) => (
  <form className="row" onSubmit={props.onSubmitHandler}>
    <div>
      <label className="row" htmlFor="lecturers">
        Lecturer(s)
      </label>
      <button className="row" type="submit">
        {props.isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
    <div>
      <textarea
        id="lecturers"
        value={props.lecturers}
        onChange={props.onChangeHandler}
        disabled={!props.isEditing}
      />
    </div>
  </form>
);

export default LecturersForm;
