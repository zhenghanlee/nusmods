import * as React from 'react';
import { useState } from 'react';
import { Review, difficulty, teachingStaff, workload } from './types';
import './Submission.scss';

type Props = {
  onSubmit: (review: Review) => void;
};

const Submission = (props: Props) => {
  const [key, setKey] = useState(1);
  const refreshKey = () => setKey(key + 1);

  const onClickSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!state.studentNumber) return;
    if (!verifyStudentNo(state.studentNumber)) {
      alert('The input matric number is invalid!');
      return;
    }
    if (state.name === '') props.onSubmit({ ...state, name: 'Anonymous' });
    else props.onSubmit(state);
    refreshKey();
  };

  const [state, setState]: [Review, (newState: any) => void] = useState({
    name: '',
    studentNumber: '',
    difficulty: 3,
    teachingStaff: 3,
    workload: 3,
    review: '',
  });

  return (
    <form onSubmit={onClickSubmit} key={key}>
      {getInputField('Name (Optional)', (val) => setState({ ...state, name: val }), false)}
      {getInputField('Student Number', (val) => setState({ ...state, studentNumber: val }), true)}
      {getRadioButtons('Workload', workload, (val) => setState({ ...state, workload: val }))}
      {getRadioButtons('Difficulty', difficulty, (val) => setState({ ...state, difficulty: val }))}
      {getRadioButtons('Teaching Staff', teachingStaff, (val) =>
        setState({ ...state, teachingStaff: val }),
      )}
      {getTextField('Review (Optional)', (val) => setState({ ...state, review: val }))}
      <button className="btn btn-outline-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

const getInputField = (
  label: string,
  onChangeHandler: (str: string) => void,
  isRequired: boolean,
) => {
  const onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void = (evt) =>
    onChangeHandler(evt.currentTarget.value);
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <label>{label}</label>
      <input type="text" className="form-control" required={isRequired} onChange={onInputChange} />
    </div>
  );
};

const getTextField = (label: string, onChangeHandler: (str: string) => void) => {
  const onInputChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void = (evt) =>
    onChangeHandler(evt.currentTarget.value);
  return (
    <div className="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <label>{label}</label>
      <textarea className="form-control" onChange={onInputChange} draggable={false} rows={10} />
    </div>
  );
};

const getRadioButtons = (label: string, obj: any, onChangeHandler: (val: number) => void) => {
  const onClickHandler: (evt: React.MouseEvent<HTMLInputElement>) => void = (evt) =>
    onChangeHandler(parseInt(evt.currentTarget.value));

  const getInputElement = (val: number, field: string) => (
    <div className="form-check" style={{ margin: 'auto' }}>
      <input
        className="form-check-input"
        type="radio"
        name={label}
        id="flexRadioDisabled"
        value={val}
        onClick={onClickHandler}
        required
      />
      <label className="form-check-label" htmlFor="flexRadioDisabled">
        {field}
      </label>
    </div>
  );

  const keys: number[] = Object.keys(obj).map((key) => parseInt(key));
  return (
    <fieldset id={label} style={{ marginTop: '20px', marginBottom: '20px' }}>
      <label>{label}</label>
      <div
        className="form-check"
        style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '1fr' }}
      >
        {keys.map((key) => getInputElement(key, obj[key]))}
      </div>
    </fieldset>
  );
};

const verifyStudentNo: (str: string) => boolean = (str) => {
  if (str.length != 9) return false;

  const prefix = str.charAt(0);
  if (prefix === 'U') var weights = [0, 1, 3, 1, 2, 7];
  else if (prefix === 'A') var weights = [1, 1, 1, 1, 1, 1];
  else return false;

  let sum = 0;
  for (let i = 0; i < 6; i++) sum += weights[i] * parseInt(str[i + 2]);
  return 'YXWURNMLJHEAB'[sum % 13] === str[8];
};

export default Submission;
