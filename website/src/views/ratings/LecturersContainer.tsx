import { FC, useState } from 'react';
import LecturersForm from './LecturersForm';

const LecturersContainerComponent: FC = () => {
  const [isEditingLecturers, setIsEditingLecturers] = useState(false);
  const [lecturers, setLecturers] = useState(
    `PRABAWA Adi Yoga Sidi\nChristian Von Der WETH\nHUANG Zhiyong`,
  );

  const toggleIsEditingLecturers = () => {
    setIsEditingLecturers((previousState) => !previousState);
  };

  const onChangeLecturers = async (event: React.FormEvent<HTMLTextAreaElement>) => {
    setLecturers(event.currentTarget.value);
  };

  const onSubmitLecturersForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleIsEditingLecturers();
  };

  return (
    <LecturersForm
      isEditing={isEditingLecturers}
      lecturers={lecturers}
      onChangeHandler={onChangeLecturers}
      onSubmitHandler={onSubmitLecturersForm}
    />
  );
};

export default LecturersContainerComponent;
