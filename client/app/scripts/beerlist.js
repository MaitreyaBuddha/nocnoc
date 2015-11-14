/**
 * Author: Kelly Johnson
 * Copyright 2015 Noc Noc
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * API for accessing beer list data
 */

'use strict';

/* global Tabletop */
/* exported BeerList */

var BeerList = function(readyCB) {
  var sheetUrl = 'https://docs.google.com/spreadsheets/d/1MxVauvAFYf-mCaeggwBXOv9QxQiSMQJJlZp29egw0gY/pubhtml';
  var me = this;

  function showInfo(data) {
    me.beers = data;
    if (typeof readyCB === 'function') {
      readyCB(me);
    }
  }

  Tabletop.init({
    key: sheetUrl,
    callback: showInfo,
    simpleSheet: true
  });

};
