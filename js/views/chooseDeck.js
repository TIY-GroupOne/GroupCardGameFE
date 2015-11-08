import React from 'react';
//import any linked views

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  createDeckClickHandler () {
     return this.props.onCreateDeckClick();
  }, 

   render() {
    return (
      <div>
        <div>All the current decks go here</div>
        <button onClick ={this.createDeckClickHandler}>Create A New Deck</button>
      </div>
      );
        
  }
});
console.log('choose a deck view');