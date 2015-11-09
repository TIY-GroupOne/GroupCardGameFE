import React from 'react';
import $ from 'jquery';
//import any linked views

const API_URL1 = 'http://cardyo.herokuapp.com/signup';

export default React.createClass({

  createNewAccount (e) {
    e.preventDefault()
    var accountobj = {
      username : this.refs.username.value,
      password : this.refs.password.value,
      email : this.refs.email.value
    };
    $.ajax({
    url: API_URL1,
    type: 'POST',
    data: accountobj
  }).then( (data) => {
    this.signUpClickHandler();
    console.log(data);
  })
  },

  spinClickHandler () {
    return this.props.onSpinClick();
  },

  signUpClickHandler () {
    return this.props.onSignUpClick();
  },

   render() {
    return (
      <div className='signUpForm'>
        <form>
          <input className="signupinput" ref="username" type="username" placeholder="Username"/>
          <br/>
          <input className="signupinput" ref="password" type="password" placeholder="Password"/>
          <br/>
          <input className="signupinput" ref="email" type="email" placeholder="Email"/>
          <br/>
          <button className="signupbut" onClick ={this.createNewAccount}>Sign Up</button>
        </form>
      </div>
      );
    console.log('sign up form view');
  }
});
