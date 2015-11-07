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
        <p>Sign Up Form</p>
        <form>
          <input ref="username" type="username"/>
          <br/>
          <input ref="password" type="password"/>
          <br/>
          <input ref="email" type="email"/>
        </form>
        <button onClick ={this.createNewAccount}>Sign Up</button>
      </div>
      );
    console.log('sign up form view');    
  }
});
