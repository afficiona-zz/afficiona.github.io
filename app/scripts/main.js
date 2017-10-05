/**
 * Paint Board
 **/

(function($) {
  'use strict';
  return;

  var defaults = {
    clicked: false,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  };

  $('.hero').on('mousedown', function (e) {
    defaults.clicked = true;
    defaults.startX = e.clientX;
    defaults.startY = e.clientY;
  });

  $('.hero').on('mousemove', function (e) {
    var start = $('<div class="start"></div>');
    if (defaults.clicked) {
      start.css({'left': e.offsetX, 'top': e.offsetY});
      $(this).append(start);
    }
  });

  $('.hero').on('mouseup', function (e) {
    defaults.clicked = false;
    defaults.endX = e.clientX;
    defaults.endY = e.clientY;
    defaults.degree = Math.atan2(defaults.endY - defaults.startY, defaults.endX - defaults.startX) * 180 / Math.PI;
    defaults.hypotenuse = (defaults.endX - defaults.startX) / Math.cos(defaults.degree * Math.PI / 180);
    $(this).find('.start').remove();
    var line = $('<div class="line"></div>');
    line.css({
      'left': defaults.startX,
      'top': defaults.startY,
      'width': defaults.hypotenuse,
      'transform': 'rotate(' + defaults.degree + 'deg)'
    });
    $(this).append(line);
    defaults.startX = defaults.startY = defaults.endX = defaults.endY = defaults.degree = defaults.hypotenuse = 0;
  });
})(jQuery);