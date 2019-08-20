const axios = require("axios");

const url = "http://localhost:3333/todos";
// Make a request for a user with a given ID
axios
  .get(url)
  .then(function(response) {
    // handle success
    console.log(response.data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

// fetch(url)
//   .catch(error => {
//     console.log(error);
//   })
//   .then(response => {
//     console.log(response);
//   });
// fetch(url)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
