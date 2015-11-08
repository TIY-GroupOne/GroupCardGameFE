import React from 'react';
import $ from 'jquery';
// import HomeViewComponent from '.home';
const API_URL3 = 'http://cardyo.herokuapp.com/index';


export default React.createClass({

  getInitialState: function () {
    return {
      decks : ''
    };
  },

  componentDidMount: function () {
    $.get('http://cardyo.herokuapp.com/index', function (results) {
      var deckTitles = results.decks;
      console.log(deckTitles);
      if (this.isMounted()) {
        this.setState({
          deck1: deckTitles[0].title,
          deck2: deckTitles[1].title,
          deck3: deckTitles[2].title,
          deck4: deckTitles[3].title,
          deck5: deckTitles[4].title
        });
      }
    }.bind(this));
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
        <h1 className="recentDecks">Most Recent Decks Added</h1>
        <div className="gamecards"><span>{this.state.deck1}</span></div>
        <div className="gamecards"><span>{this.state.deck2}</span></div>
        <div className="gamecards"><span>{this.state.deck3}</span></div>
        <div className="gamecards"><span>{this.state.deck4}</span></div>
        <div className="gamecards"><span>{this.state.deck5}</span></div>
        </div>
        <button className="signoutbut" onclick={this.signOutClickHander}>SignOut</button>
      </div>

      );
       console.log('main game view');
  }
});
// var getcurrentDecks =
//     $.ajax({
//     url: API_URL3,
//     type: 'GET',
//     data: '',
//     success: (data) => {
//       console.log(data.decks);
//       decks = data.decks;
//     },
//   });
