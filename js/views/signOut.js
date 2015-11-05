import React from 'react';
//import any linked views

export default React.createClass({

  returnClickHandler () {
     return this.props.onReturnClick();
  }, 

  signOutClickHandler () {
     return this.props.onSignOutClick();
  }, 

  DeleteClickHandler () {
     return this.props.onDeleteClick();
  }, 

   render() {
    return (
      <div>
        <button onClick ={this.returnClickHandler}>Return to Game</button>
        <button onClick ={this.signOutClickHandler}>Sign Out</button>
        <button onClick ={this.deleteClickHandler}>Delete Account</button>
      </div>
      );
        console.log('sign out view');
  }
});