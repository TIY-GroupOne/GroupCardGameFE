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
        <div className="dashboard">
        <div className="gamecards">1</div>
        <div className="gamecards">2</div>
        <div className="gamecards">3</div>
        <div className="gamecards">4</div>
        <div className="gamecards">5</div>
        <div className="gamecards">6</div>
        <div className="gamecards">7</div>
        <div className="gamecards">8</div>
        </div>
        <button className="signoutbut" onClick ={this.signOutClickHandler}>Sign Out</button>
      </div>

      );
       console.log('main game view');
  }
});
