import axios from 'axios';

const _API_URL = "https://hack-uci-test-endpoint.herokuapp.com/test";


// send form values as GET request to postman-echo server
const sendData = (params, onResponse) => {
  console.log("sending form data")
  axios.get(_API_URL, {
    params: params
  }).then(function (response) {
    // if valid response received
    if (response.status === 200) {
      onResponse(response);
    } else if (response.status === 400) {
      console.log("Server returned 400: invalid query");
    }
  }).catch(function (error) {
    console.log("Could not connect to API server");
  }).then(function () {
    // default action
  });
}

export default sendData;
