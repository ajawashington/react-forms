import React, { useState } from 'react';
import addStudent from './helpers/data/StudentData';

export default function StudentForm() {
  const [formTitle, setFormTitle] = useState();
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });

  const updateInput = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent(student);
  };

  return (
    <>
      <div className='results-add'>
      <input onChange={(e) => setFormTitle(e.target.value)}></input>
        <form
          id='addResultsForm'
          className='ui-form'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>Name:</label>
          <input
            autoFocus
            name='name'
            type='text'
            required
            placeholder='Name'
            value={student.name}
            onChange={updateInput}
          />
          <label>Teacher:</label>
          <input
            name='teacher'
            type='text'
            required
            placeholder='Teacher'
            value={student.teacher}
            onChange={updateInput}
          />
          <label>Grade:</label>
          <input
            name='grade'
            required
            placeholder='Grade'
            value={student.grade}
            onChange={updateInput}
          />
          <input type='submit' />
        </form>
      </div>
    </>
  );
}
