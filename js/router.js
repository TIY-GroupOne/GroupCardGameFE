import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Cookies from 'js-cookie';

import SpinnerComponent from './views/spinner';


export default Backbone.Router.extend({



  routes: {
   // first view has log-in, sign-up and rules
    ""        : "homeView",
    "game"    : "gameView",
    "signOut" : "signOutView"

  },

   initialize(appElement) {
    this.el =appElement;
    //add any models/resources here

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },


render (component) {
  ReactDom.render(component, this.el);
}

  showHomeView() {
    this.render(
          // tab container goes here
          //log-in + sign-in buttons go here
        );
      });
  },

    showGameView() {
    this.render(
      //card-containing divs go here
      
    );
  },

    showSignOutView() {
    this.render(
      // sign out/delete profile buttons go here
    );

  showSpinner () {
    ReactDom.render(<SpinnerComponent/>);
  },
  

  start: function (){
    Backbone.history.start();
  }
});

export default Router;