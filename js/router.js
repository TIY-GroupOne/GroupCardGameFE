import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Cookies from 'js-cookie';

import HomeComponent from './views/home';
// import GameComponent from './views/gameView';
// import ChooseADeckComponent from './views/chooseADeck';
// import CurrentDeckComponent from './views/currentDeck';
// import CreateDeckComponent from './views/createDeck';
// import MainGameComponent from './views/mainGame';
// import SignOutComponent from './views/signOut';
// import SpinnerComponent from './views/spinner';



export default Backbone.Router.extend({




  routes: {
   // first view has log-in, sign-up and rules
    ""             : "showHomeView",
    "game"         : "showGameView",
    "chooseDeck"   : "showChooseADeckView",
    "currentDecks" : "showCurrentDecksView",
    "createDeck"   : "showCreateANewDeckView",
    "mainGame"     : "showMainGameView",
    "signOut"      : "showSignOutView",
    "goodBye"      : "showGoodByeView"

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
      onLogInClick={()=> this.goto('mainGameView')}   
      onSignInClickClick={() => this.goto('createANewDeckView')}/>,
      document.querySelector('.app')
        );
  },

  showGameView() {
    ReactDom.render(

      
      <GameComponent   
      onChooseADeckClick={() => this.goto('chooseADeckView')}
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/>,
      document.querySelector('.app')
        );
  },

  showChooseADeck() {
    ReactDom.render(
      
      //FIXME
      // preset card-containing divs go here
      // AFTER deck is choosen, return to main game view
      <ChooseComponent
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/>, 
      document.querySelector('.app')
    );
  },  

  showCurrentDecks() {
    ReactDom.render(
      // preset card-containing divs go here
      
      //FIXME
      //needs a button to return to 
      <CurrentComponent
      onPlayClick={()=> this.goto('mainGameView')}   
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/>,
      document.querySelector('.app') 
    );
  },  

  showCreateANewDeckView() {
    ReactDom.render(
      <CreateComponent  
      onDeckCompleteClick={() => this.goto ('mainGameView')}/>,
      document.querySelector('.app') 
    );
  },

  showMainGameView() {
    ReactDom.render(
      // choosen card deck goes here
       // FIXME 
      // fill in Choose a card deck route      
      <MainGameComponent
      onSignOutClick={() => this.goto('goodByeView')}/>, 
      document.querySelector('.app')
    );
  }, 
  
  showSignOutView() {
    ReactDom.render(
      // FIXME
      // sign out/delete profile buttons go here
      <SignOutComponent
      onReturnClick={() => this.goto('mainGameView')}
      onSignOutClick={() => this.goto('goodbyeView')}   
      onDeleteClick={() => this.goto('goodyeView')}/>,
      document.querySelector('.app')
    );
  },

  showGoodbyeView() {
    ReactDom.render(
      // choosen card deck goes here
      // FIXME 
      // text for goodbye page 
      // do we want a return to game page       
      <GoodByeComponent
      onClick={() => this.goto('')}/>,
      document.querySelector('.app')
    );
  },  

  // showSpinner () {
  //   ReactDom.render(<SpinnerComponent/>);
  // },
  

start: function (){
    Backbone.history.start();
  }
});
