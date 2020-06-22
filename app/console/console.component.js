angular.
  module('app').
  component('console', {
    templateUrl: '/app/console/console.component.html',
    controller: function() {
      var captionLength = 0;
      var typeInterval = 50;

      var console;
      var cursor;
      var caption;

      $(document).ready(function() {
          console = $('.header-console h1');
          cursor = $('.header-console-cursor');
          caption = console.text();

          setInterval (function() { cursorAnimation() }, (caption.length+1)*typeInterval);

          type();
      });

      function type() {
          console.html(caption.substr(0, captionLength++));
          if(captionLength < caption.length+1) {
              setTimeout(function() { type() }, typeInterval);
          } else {
              captionLength = 0;
              caption = '';
          }
      }

      function cursorAnimation() {
          cursor.animate({
              opacity: 0
          }, 'fast', 'swing').animate({
              opacity: 1
          }, 'fast', 'swing');
     }
    }
  });