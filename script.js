// var word = 'code';
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
//     headers: { 'X-Api-Key': 'zXRx7pjw4EfGOeD98D37LQ==8HW3vmZ257KOHGDb' },
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


// script.js


let allData;
const fetch = require('node-fetch');
const word = 'B';
const url = `https://api.api-ninjas.com/v1/dictionary?word=${word}`;
const headers = {
  'X-Api-Key': 'zXRx7pjw4EfGOeD98D37LQ==8HW3vmZ257KOHGDb',
  'Content-Type': 'application/json'
};

fetch(url, { headers })
  .then(res => res.json())
  .then(data => {allData = data ;
     console.log(allData)} )
  .catch(err => console.error(err));



  // here we add some comments