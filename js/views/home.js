import React from 'react';
// import any linked views

export default React.createClass({


  spinClickHandler () {
    return this.props.onSpinClick();
  }, 
  
  logInClickHandler () {
    return this.props.onLogInClick();
  },

  signInClickHandler () {
     return this.props.onSignClick();
  }, 

  render() {
    return (
      <div className='tabContainer'>
        <button onClick ={this.props.onLogInClickHandler}>Log In</button>
        <button onClick ={this.props.onSignUpClickHandler}>Sign Up</button>
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