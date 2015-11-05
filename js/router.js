import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Cookies from 'js-cookie';

// import SpinnerComponent from './views/spinner';


export default Backbone.Router.extend({



  routes: {
   // first view has log-in, sign-up and rules
    ""             : "homeView",
    "game"         : "gameView",
    "chooseDeck"   : "chooseADeckView",
    "currentDecks" : "currentDecksView",
    "createDeck"   : "createANewDeckView",
    "mainGame"     : "mainGameView",
    "signOut"      : "signOutView",
    "goodBye"      : "goodByeView"

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
    this.render(
          // tab container goes here
          //log-in + sign-in buttons go here
          //'About Game' goes here
          //"START" button goes here, directs to GameView below
      <HomeComponent
      onLogInClick={()=> this.goto('mainGameView')}   
      onSignInClickClick={() => this.goto('createANewDeckView')}/> 
        );
 
  },

  showGameView() {
    this.render(

      
      <GameComponent   
      onChooseADeckClick={() => this.goto('chooseADeckView')}
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/> 
    );
  },

  showChooseADeck() {
    this.render(
      
      //FIXME
      // preset card-containing divs go here
      // AFTER deck is choosen, return to main game view
      <ChooseComponent
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/> 
    );
  },  

  showCurrentDecks() {
    this.render(
      // preset card-containing divs go here
      
      //FIXME
      //needs a button to return to 
      <CurrentComponent
      onPlayClick={()=> this.goto('mainGameView')}   
      onCreateANewDeckClick={() => this.goto('createANewDeckView')}/> 
    );
  },  

  showCreateANewDeckView() {
    this.render(
      <CreateComponent  
      onDeckCompleteClick={() => this.goto ('mainGameView')}/> 
    );
  },

  showMainGameView() {
    this.render(
      // choosen card deck goes here
       // FIXME 
      // fill in Choose a card deck route      
      <MainGameComponent
    
      onSignOutClick={() => this.goto('goodByeView')}/> 
    );
  }, 
  
  showSignOutView() {
    this.render(
      // FIXME
      // sign out/delete profile buttons go here
      <SignOutComponent
      onReturnClick={() => this.goto('mainGameView')}
      onSignOutClick={() => this.goto('goodbyeView')}   
      onDeleteClick={() => this.goto('goodyeView')}/>
      
    );
  },

  showGoodbyeView() {
    this.render(
      // choosen card deck goes here
      // FIXME 
      // text for goodbye page 
      // do we want a return to game page       
      <GoodByeComponent
      onClick={() => this.goto('')}/> 
    );
  },  

  // showSpinner () {
  //   ReactDom.render(<SpinnerComponent/>);
  // },
  

start: function (){
    Backbone.history.start();
  }
});

export default Router;