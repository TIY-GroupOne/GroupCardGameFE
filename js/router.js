import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Cookies from 'js-cookie';

import HomeComponent from './views/home';
import GameComponent from './views/game';
import ChooseADeckComponent from './views/chooseDeck';
import CurrentDeckComponent from './views/currentDecks';
import CreateDeckComponent from './views/createANewDeck';
import MainGameComponent from './views/mainGame';
import SignOutComponent from './views/signOut';
import SpinnerComponent from './views/spinner';
import SignUpFormComponent from './views/signUpForm';
import GoodByeComponent from './views/goodbye';



export default Backbone.Router.extend({




  routes: {
   // first view has log-in, sign-up and rules
    ""             : "showHomeView",
    "game"         : "showGameView",
    "signupForm"   : "showSignUpFormView",
    "chooseDeck"   : "showChooseADeckView",
    "currentDecks" : "showCurrentDecksView",
    "createDeck"   : "showCreateANewDeckView",
    "mainGame"     : "showMainGameView",
    "signOut"      : "showSignOutView",
    "goodbye"      : "showGoodByeView"

  },

   initialize(appElement) {
    this.el=appElement;
    //add any models/resources here

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },


render (component) {
  ReactDom.render(component, this.el);
},

  showHomeView() {
    ReactDom.render(
          // tab container goes here
          //log-in + sign-in buttons go here
          //'About Game' goes here
          //"START" button goes here, directs to GameView below
      <HomeComponent
      onLogInClick={()=> this.goto('mainGame')}
      onSignUpClick={() => this.goto('signupForm')}/>,
      document.querySelector('.app')
      );
  },

  showGameView() {
    ReactDom.render(
      <GameComponent
      onSignOutClick={() => this.goto('')}
      onCreateANewDeckClick={() => this.goto('createDeck')}/>,
      document.querySelector('.app')
        );
  },

  showChooseADeckView() {
    ReactDom.render(

      //FIXME
      // preset card-containing divs go here
      // AFTER deck is choosen, return to main game view
      <ChooseADeckComponent
      onCreateDeckClick={() => this.goto('createDeck')}/>,
      document.querySelector('.app')
    );
  },

  showCurrentDecksView() {
    ReactDom.render(
      // preset card-containing divs go here

      //FIXME
      //needs a button to return to
      <CurrentDecksComponent
      onPlayClick={()=> this.goto('mainGameView')}
      onCreateDeckClick={() => this.goto('createDeck')}/>,
      document.querySelector('.app')
    );
  },

  showCreateANewDeckView() {
    ReactDom.render(
      <CreateDeckComponent
      onDeckCompleteClick={() => this.goto ('mainGame')}/>,
      document.querySelector('.app')
    );
  },

  showMainGameView() {
    ReactDom.render(
      // choosen card deck goes here
       // FIXME
      // fill in Choose a card deck route
      <MainGameComponent
      onSignOutClick={() => this.goto('')}/>,
      document.querySelector('.app')
    );
  },

  showSignOutView() {
    ReactDom.render(
      // FIXME
      // sign out/delete profile buttons go here
      <SignOutComponent
      onReturnClick={() => this.goto('mainGame')}
      onSignOutClick={() => this.goto('goodbye')}
      onDeleteClick={() => this.goto('goodbye')}/>,
      document.querySelector('.app')
    );
  },

  showGoodByeView() {
    ReactDom.render(
      // choosen card deck goes here
      // FIXME
      // text for goodbye page
      // do we want a return to game page
      <GoodByeComponent
      onReturnClick={() => this.goto('mainGame')}/>,
      document.querySelector('.app')
    );
  },

   showSignUpFormView() {
    ReactDom.render(
      // choosen card deck goes here
       // FIXME
      // fill in Choose a card deck route
      <SignUpFormComponent
      onSignUpClick={() => this.goto('')}/>,
      document.querySelector('.app')
    );
  },

  showSpinner () {
    ReactDom.render(<SpinnerComponent/>);
  },


start: function (){
    Backbone.history.start();
  }
});
