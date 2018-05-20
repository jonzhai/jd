'use strict'
import $ from "./myTouch"
var dv = $('#dv1');
dv.on('swipe', function(e) {
    console.log(e.eventType)
})
dv.on('tap', function(e) {
    console.log(e.eventType)
})
dv.on('longtap', function(e) {
    console.log(e.eventType)
})
dv.on('drag', function(e) {
    console.log(e.eventType)
})