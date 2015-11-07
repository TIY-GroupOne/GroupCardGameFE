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
        <p>Goodbye</p>
        <p>return to main page Button? Auto-timed return?</p>
        <button onClick ={this.returnClickHandler}>Return to Game</button>
      </div>
      );
    console.log('goodbye page');
        
  }
});