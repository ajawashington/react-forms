import React, { useState } from 'react';
import addStudent from './helpers/data/StudentData';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: '',
  });

  const updateInput = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent({
      name: student.name,
      teacher: student.teacher,
      grade: student.grade
    });
  };

  return (
    <>
      <div className="results-add">
        <form
          id="addResultsForm"
          className="ui-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2>New Student</h2>
          <label>Name:</label>
          <input
            autoFocus
            name="name"
            type="text"
            required
            placeholder="Name"
            value={student.name}
            onChange={updateInput}
          />
          <label>Teacher:</label>
          <input
            name="teacher"
            type="text"
            required
            placeholder="Teacher"
            value={student.teacher}
            onChange={updateInput}
          />
          <label>Grade:</label>
          <input
            name="grade"
            type="text"
            required
            placeholder="Grade"
            value={student.grade}
            onChange={updateInput}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default StudentForm;
