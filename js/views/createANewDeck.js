import React from 'react';
//import any linked views

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },  

  deckCompleteClickHandler () {
    return this.props.onDeckCompleteClick();
  },

   render() {
    return (
      <div>
        <button onClick ={this.deckCompleteClickHandler}>Deck Complete</button>
      </div>
      );
        
  }
});
console.log('create a new deck view');