/**
 * Author: Kelly Johnson
 * Copyright 2015 Noc Noc
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * API for accessing images
 */

'use strict';

/* exported Photos */
/* global Instafeed */

var Photos = function(readyCB) {
  var clientID = '42ec91a4ba66450b8f6509f75a929582';
  var me = this;
  var readyCount = 0;
  me.tagged = [];
  me.nocnoc = [];

  function checkReady() {
    if (++readyCount === feeds.length && typeof readyCB === 'function') {
      readyCB(me);
    }
  }

  function addPhotos(data, photos) {
    var len = data.data.length;
    for (var i = 0; i < len; ++i) {
      var item = data.data[i];
      var damnRubyNamingConventionsinJSandJSLint = 'standard_resolution';
      var img = item.images[damnRubyNamingConventionsinJSandJSLint];
      img.user = item.user;
      photos.push(img);
    }
  }

  function taggedSuccess(data) {
    me.tagData = data;
    addPhotos(data, me.tagged);
    checkReady(data);
  }

  var feeds = [
    new Instafeed({
      get: 'tagged',
      tagName: 'nocnocsf',
      mock: true,
      clientId: clientID,
      success: taggedSuccess
    }).run(),
    new Instafeed({
      get: 'tagged',
      tagName: 'nocnoc',
      mock: true,
      clientId: clientID,
      success: taggedSuccess
    }).run(),
    new Instafeed({
      get: 'user',
      userId: '451138018',
      mock: true,
      clientId: clientID,
      success: function(data) {
        addPhotos(data, me.nocnoc);
        checkReady(data);
      }
    }).run()
  ];
  me.feeds = feeds;
};
