import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStudent = (obj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/students.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/students/${response.data.name}.json`, body)
        .then(() => {
          getStudents().then((studentsArray) => resolve(studentsArray));
        });
    }).catch((error) => reject(error));
});

export default addStudent;
