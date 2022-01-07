import * as React from 'react';
import { useState } from 'react';
import { Review, difficulty, teachingStaff, workload } from './types';

type Props = {
  onSubmit: (review: Review) => void;
};

const Submission = (props: Props) => {
  const [state, setState]: [Review, (newState: any) => void] = useState({
    name: '',
    studentNumber: '',
    difficulty: 3,
    teachingStaff: 3,
    workload: 3,
    review: '',
  });
  return (
    <div>
      {getInputField('Name', (val) => setState({ ...state, name: val }))};
      {getInputField('Student Number', (val) => setState({ ...state, studentNumber: val }))}
      {getRadioButtons(difficulty, (val) => setState({ ...state, difficulty: val }))}
      {getRadioButtons(teachingStaff, (val) => setState({ ...state, teachingStaff: val }))}
      {getRadioButtons(workload, (val) => setState({ ...state, workload: val }))}
      {getInputField('Review', (val) => setState({ ...state, review: val }))}
    </div>
  );
};

const getInputField = (label: string, onChangeHandler: (str: string) => void) => {
  const onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void = (evt) =>
    onChangeHandler(evt.currentTarget.value);
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" id="name" className="form-control" required onChange={onInputChange} />
    </div>
  );
};

const getRadioButtons = (obj: any, onChangeHandler: (val: number) => void) => {
  const onClickHandler: (evt: React.MouseEvent<HTMLInputElement>) => void = (evt) =>
    onChangeHandler(evt.currentTarget.valueAsNumber);

  const getInputElement = (value: number, field: string) => {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDisabled"
          id="flexRadioDisabled"
          value={value}
          onClick={onClickHandler}
        />
        <label className="form-check-label" htmlFor="flexRadioDisabled">
          {field}
        </label>
      </div>
    );
  };

  const keys: number[] = Object.keys(obj).map(parseInt);
  return <form aria-required>{keys.map((key) => getInputElement(key, obj[key]))}</form>;
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
