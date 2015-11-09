import React from 'react';
import $ from 'jquery';
// import any linked views

const API_URL2 = 'http://cardyo.herokuapp.com/login';


export default React.createClass({

  loginandContinue (e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      username : this.refs.username.value,
      password : this.refs.password.value,
      access_token : ''
    };

    var loginAccount = (accountobj) => {
    $.ajax({
        url: API_URL2,
        type: 'POST',
        data: accountobj,
        success: () => {
          this.logInClickHandler();
        },
        error: function () {
          alert('you suck at this!');
        }
      })
    };
      loginAccount(data);
      console.log(data);

  },

  spinClickHandler () {
    return this.props.onSpinClick();
  },

  logInClickHandler () {
    return this.props.onLogInClick();
  },

  signUpClickHandler () {
     return this.props.onSignUpClick();
  },

  render() {
    return (
      <div className='tabContainer'>
        <div className='insideLogin'>
        <form>
          <input ref="username" type="username" placeholder="Username"/>
          <br/>
          <input ref="password" type="password" placeholder="Password"/>
        </form>
        <p>
        </p>
        <button onClick ={this.loginandContinue}>Log In</button>
        <br/>
        <button onClick ={this.signUpClickHandler}>SignUp</button>
        </div>
      </div>
      );

  },

    // loginAccount (accountobj) {
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
    //       })
    //     },

    //     // let uName = 'maryam123';
    //     // let pWord = 'jontaesucks123';
    //     // let aToken = '57382acf28c9e196dca58c62d36a001e';

    // loginAccount({username: uName, password: pWord, access_token: aToken})
});
