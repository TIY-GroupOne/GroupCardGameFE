import React from 'react';
//import any linked views

export default React.createClass({


  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  returnClickHandler () {
     return this.props.onReturnClick();
  },

   render() {
    return (
      <div>
        <button className="goodbyeButton" onClick ={this.returnClickHandler}>Return to Game</button>
      </div>
      );
    console.log('goodbye page');
        
  }
});