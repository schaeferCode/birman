const axios = require('axios').default;
axios.defaults.baseURL = process.env.VUE_BASE_URL || 'http://localhost:3000';

export const getFacebook = () => {
  axios
    .get('/facebook')
    .then(response => {
      console.log({ response });
    })
    .catch(err => {
      console.log({ err });
    });
};
