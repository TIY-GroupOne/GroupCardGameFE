import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Cookies from 'js-cookie';


export default Backbone.Router.extend({



  routes: {
   // first view has log-in, sign-up and rules
    ""        : "homeView",
    "game"    : "gameView",
    "signOut" : "signOutView"

  },

  

  start: function (){
    Backbone.history.start();
  }
});

export default Router;