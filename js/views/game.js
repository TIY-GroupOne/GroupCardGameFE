import React from 'react';
//import any linked views

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  chooseADeckClickHandler () {
     return this.props.onChooseADeckClick();
  }, 

  createANewDeckClickHandler () {
     return this.props.onCreateANewDeckClick();
  }, 

   render() {
    return (
      <div>
        <div>Game view</div>
        <button onClick ={this.chooseADeckClickHandler}>Choose A Deck</button>
        <button onClick ={this.createANewDeckClickHandler}>Create A New Deck</button>
      </div>
      );
        
  }
});
console.log('game view');