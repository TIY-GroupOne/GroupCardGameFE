import React from 'react';
//import any linked views

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  PlayClickHandler () {
     return this.props.onPlayClick();
  },

  createANewDeckClickHandler () {
     return this.props.onCreateANewDeckClick();
  },

   render() {
    return (
      <div>
        <div>Current Decks</div>
        <button onClick ={this.playClickHandler}>Play</button>
        <button onClick ={this.createANewDeckClickHandler}>Create A New Deck</button>
      </div>
      );
    console.log('current decks view');    
  }
});




