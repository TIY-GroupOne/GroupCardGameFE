import React from 'react';
// import any linked views

export default React.createClass({


  spinClickHandler () {
<<<<<<< HEAD
      this.props.onSpinClick();
  },

=======
    return this.props.onSpinClick();
  }, 
  
>>>>>>> 2a91dc14863f75326af874406d6d7c7ad9250cf1
  logInClickHandler () {
    return this.props.onLogInClick();
  },

<<<<<<< HEAD
  signInClickHandler () {
      this.props.onSignClick();
  },
=======
  signUpClickHandler () {
     return this.props.onSignUpClick();
  }, 
>>>>>>> 2a91dc14863f75326af874406d6d7c7ad9250cf1

  render() {
    return (
      <div className='tabContainer'>
        <button onClick ={this.logInClickHandler}>Log In</button>
        <button onClick ={this.signUpClickHandler}>Sign Up</button>
        <p>   Welcome to Cardyo!
           Sign in or make an account
                Pick a card deck
                      OR
                Make a new deck
  Race against the clock to set a new high score
If you quit the game, your progress will not be saved
               Ready? Here we go!</p>
      </div>
      );

  }
});
