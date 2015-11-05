import React from 'react';
// import any linked views

export default React.createClass({


  spinClickHandler () {
      this.props.onSpinClick();
  },

    return this.props.onSpinClick();
  },

  logInClickHandler () {
    return this.props.onLogInClick();
  },

  signInClickHandler () {
      this.props.onSignClick();
  },
  signUpClickHandler () {
     return this.props.onSignUpClick();
  },

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
