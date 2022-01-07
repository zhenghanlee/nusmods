import * as React from 'react';
import { useState } from 'react';
import { Review, difficulty, teachingStaff, workload } from './types';

type Props = {
  onSubmit: (review: Review) => void;
};

const Submission = (props: Props) => {
  const onClickSubmit = (evt: React.FormEvent<HTMLButtonElement>) => {};

  const [state, setState]: [Review, (newState: any) => void] = useState({
    name: '',
    studentNumber: '',
    difficulty: 3,
    teachingStaff: 3,
    workload: 3,
    review: '',
  });
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      {getInputField('Name', (val) => setState({ ...state, name: val }), false)}
      {getInputField('Student Number', (val) => setState({ ...state, studentNumber: val }), true)}
      {getRadioButtons('Difficulty', difficulty, (val) => setState({ ...state, difficulty: val }))}
      {getRadioButtons('Teaching Staff', teachingStaff, (val) =>
        setState({ ...state, teachingStaff: val }),
      )}
      {getRadioButtons('Workload', workload, (val) => setState({ ...state, workload: val }))}
      {getTextField('Review', (val) => setState({ ...state, review: val }))}
      <button type="submit" onSubmit={onClickSubmit}>
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
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className="form-control" required={isRequired} onChange={onInputChange} />
    </div>
  );
};

const getTextField = (label: string, onChangeHandler: (str: string) => void) => {
  const onInputChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void = (evt) =>
    onChangeHandler(evt.currentTarget.value);
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea className="form-control" onChange={onInputChange} />
    </div>
  );
};

const getRadioButtons = (label: string, obj: any, onChangeHandler: (val: number) => void) => {
  const onClickHandler: (evt: React.MouseEvent<HTMLInputElement>) => void = (evt) =>
    onChangeHandler(parseInt(evt.currentTarget.value));

  const getInputElement = (val: number, field: string) => {
    return (
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
  };

  const keys: number[] = Object.keys(obj).map((key) => parseInt(key));
  return (
    <fieldset id={label}>
      <label>{label}</label>
      <div className="form-check" style={{ display: 'flex' }}>
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
  for (let i = 2; i < 7; i++) {
    sum += weights[i] * parseInt(str[i]);
  }
  return 'YXWURNMLJHEAB'[sum % 13] == str[8];
};

export default Submission;
