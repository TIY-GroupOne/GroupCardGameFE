import React from 'react';
//import any linked views

export default React.createClass({

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
        <button onClick ={this.signUpClickHandler}>Sign Up</button>
      </div>
      );
    console.log('sign up form view');    
  }
});
