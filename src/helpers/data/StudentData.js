import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseUrl = firebaseConfig.databaseURL;

const addStudent = (obj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/students.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/student/${response.data.name}.json`, body)
        .catch((error) => reject(error));
    });
});

export default addStudent;
