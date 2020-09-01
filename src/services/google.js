const axios = require('axios').default;
axios.defaults.baseURL = 'http://127.0.0.1:3000';

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
