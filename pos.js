// ==UserScript==
// @name         Ra-Mtek-POS
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://rayoga.marianatek.com/admin/cart/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const excludeList = [
      'button#product-15301,',
      'button#product-15260,',
      'button#product-15325,',
      'button#product-15283,',
      'button#product-15305,',
      'button#product-14766,',
      'button#product-15307,',
      'button#product-14768,',
      'button#product-14896',
  ]

  console.log('initialized')

  let cssString = ''

  excludeList.forEach((ex) => {
      cssString = cssString + ex
  });

  cssString = cssString + ' { display: none; }'

  GM_addStyle(cssString)

  function GM_addStyle(css) {
      const style = document.getElementById("GM_addStyleBy8626") || (function() {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = "GM_addStyleBy8626";
          document.head.appendChild(style);
          return style;
      })();
      const sheet = style.sheet;
      sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
  }
})();