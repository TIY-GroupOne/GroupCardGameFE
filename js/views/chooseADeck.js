import React from 'react';
//import any linked views

export default React.createClass({

  CreateANewDeckClickHandler () {
     return this.props.onCreateANewDeckClick();
  }, 

   render() {
    return (
      <div>
      <div>All the current decks go here</div>
      <button>Create a New Deck</button>
      </div>
      );
        
  }
});
console.log('choose a deck view');