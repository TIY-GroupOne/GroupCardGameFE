import React from 'react';
import $ from 'jquery';
// import HomeViewComponent from '.home';
const API_URL3 = 'http://cardyo.herokuapp.com/index';

export default React.createClass({

  getCurrentDecks (e) {
    e.preventDefault()
    var accountobj = {
      user_id : null,
      title : null,
    };
    $.ajax({
    url: API_URL3,
    type: 'GET',
    data: accountobj
  }).then( (data) => {
    this.carddata = data;
    console.log(this.carddata);
  })
  },

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
        <button className="signoutbut" onClick ={this.getCurrentDecks}>Get Decks</button>
      </div>

      );

  }
});
