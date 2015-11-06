import React from 'react';
// import any linked views

export default React.createClass({


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
        <form>
          <input text="username" type="username"/>
          <br/>
          <input text="password" type="password"/>
        </form>
        <button onClick ={this.logInClickHandler}>Log In</button>
        <br/>
        <p>First visit to Cardyo?</p>
        <br/>
        <button onClick ={this.signUpClickHandler}>Sign Up</button>
        <br/>
        <p> Welcome to Cardyo!<br/>Sign in or make an account<br/>
        Pick a card deck<br/>OR<br/>Make a new deck<br/>
        Race against the clock to set a new high score<br/>
        If you quit the game, your progress will not be saved<br/>
        Ready? Here we go!<br/></p>
      </div>
      );
        
  }
});