import _ from 'underscore';
import $ from 'jquery';


const API_URL1 = 'http://cardyo.herokuapp.com/signup';
const API_URL2 = 'http://cardyo.herokuapp.com/login';

function createAccount(accountobj) {
  $.ajax({
    url: API_URL1,
    type: 'POST',
    data: accountobj
  }).then( function (data) {
    console.log(data);
  })
}

// createAccount({username: "maryam123", password: "jontaesucks123", email: "maryam123@gmail.com"});

// function loginAccount(accountobj) {
//   $.ajax({
//     url: API_URL2,
//     type: 'POST',
//     data: accountobj,
//     success: function () {
//       alert('you logged in');
//     },
//     error: function () {
//       alert('you suck at this!');
//     }
//   })
// }

// let uName = 'maryam123';
// let pWord = 'jontaesucks123';
// let aToken = '57382acf28c9e196dca58c62d36a001e'

// loginAccount({username: uName, password: pWord, access_token: aToken});








// user: Object
// access_token: "57382acf28c9e196dca58c62d36a001e"
// email: "maryam123@gmail.com"
// username: "maryam123"