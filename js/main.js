import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import './ajaxSetup';
import Cookies from 'js-cookie';


let element = document.querySelector('.app');
var router= new Router(element);
router.start();

window.router=router;

console.log('Hello, World');
