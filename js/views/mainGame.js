import React from 'react';
// import HomeViewComponent from '.home';

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  signOutClickHandler () {
     return this.props.onSignOutClick();
  }, 


   render() {
    return (
      <div>
        <div>Game</div>
        <div>Log In Form</div>
        <button onClick ={this.signOutClickHandler}>Sign Out</button>
      </div>

      );
       console.log('main game view'); 
  }
});