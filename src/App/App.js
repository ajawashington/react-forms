import React from 'react';
import './App.scss';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import StudentForm from '../StudentForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div>
      <StudentForm formName='Student Form'/>
    </div>
  );
}

export default App;
