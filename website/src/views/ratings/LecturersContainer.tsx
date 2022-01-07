import { useState, FC, useEffect } from 'react';
import * as axios from 'axios';
import LecturersForm from './LecturersForm';

interface LecturersContainerComponentProps {
  moduleCode: string;
  semester: string;
  lecturersList: { id: string; lecturers: string }[];
}

const LecturersContainerComponent = ({
  moduleCode,
  semester,
  lecturersList,
}: LecturersContainerComponentProps) => {
  const [isEditingLecturers, setIsEditingLecturers] = useState(false);
  const [lecturers, setLecturers] = useState(
    lecturersList ? lecturersList.find((e) => e.id === semester)!.lecturers : '',
  );

  useEffect(
    () =>
      setLecturers(lecturersList ? lecturersList.find((e) => e.id === semester)!.lecturers : ''),
    [lecturersList],
  );

  const toggleIsEditingLecturers = () => {
    setIsEditingLecturers((previousState) => !previousState);
  };

  const onChangeLecturers = async (event: React.FormEvent<HTMLTextAreaElement>) => {
    setLecturers(event.currentTarget.value);
    console.log(lecturersList);
  };

  const onSubmitLecturersForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const header = 'http://localhost:5000/modratings/us-central1/app/api/v1';
    const url = `${header}/${moduleCode.toLowerCase()}/${semester}`;
    axios.default.post(url, { lecturers });
    toggleIsEditingLecturers();
  };

  return (
    <div style={{ width: '480px', marginRight: '80px' }}>
      <LecturersForm
        isEditing={isEditingLecturers}
        lecturers={lecturers}
        onChangeHandler={onChangeLecturers}
        onSubmitHandler={onSubmitLecturersForm}
      />
    </div>
  );
};

export default LecturersContainerComponent;
