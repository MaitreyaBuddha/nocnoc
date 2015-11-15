/**
 * Author: Kelly Johnson
 * Copyright 2015 Noc Noc
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * API for getting event information
 */

'use strict';

/* exported Events */
/* global $ */

function Events(readyCB) {
  var mykey = 'AIzaSyCLOTjwBuYDAlNEbDnxkpnGp-jqsmq3NxY';
  var calendarid = 'selpuoj02rrk9bl63e9mduaevs@group.calendar.google.com';
  var me = this;

  $.ajax({
    type: 'GET',
    url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarid + '/events?key=' + mykey),
    dataType: 'json',
    success: function(response) {
      //do whatever you want with each
      me.list = response.items;
      if (typeof readyCB === 'function') {
        readyCB(me);
      }
    },
    error: function(response) {
      //tell that an error has occurred
      console.error(response);
    }
  });
}
