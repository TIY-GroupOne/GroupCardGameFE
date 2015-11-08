import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import './ajaxSetup';
import Cookies from 'js-cookie';
import $ from 'jquery';
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const AppBar = require('material-ui/lib/app-bar');
const RaisedButton = require('material-ui/lib/raised-button');

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menu/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
let Colors = require('material-ui/lib/styles/colors');
let ColorManipulator = require('material-ui/lib/utils/color-manipulator');
let Spacing = require('material-ui/lib/styles/spacing');


ReactDom.render(
  <AppBar
    title="Cardyo"
  />,
  document.querySelector('.topbar')
);



new Router().start();



console.log('Hello, World');
