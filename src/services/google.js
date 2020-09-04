const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:3000';

export const getGoogle = () => {
  axios
    .get('/google')
    .then(response => {
      console.log({ response });
    })
    .catch(err => {
      console.log({ err });
    });
};
