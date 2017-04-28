/**
 * Memory board game Algorithm.
 * 1) Set of two actions.
 *    a) Store number of first click.
 *    b) If same number on second click, Success.
 *    c) Else, Revert.(Failure) (Increment attempts counter)
 **/

(function($) {
  'use strict';
  var attemptsCounter = 0;
  var currentAttempt = null;
  // List of buttons who are already acted on with success
  var invalidButtons = [];

  $(document).ready(function () {

    updateAttemptsCounter(attemptsCounter);

    $('.button').click(function () {
      var thisButtonVal = $(this).data('val');

      // Not doing anything if invalid button
      if (invalidButtons.indexOf(thisButtonVal) !== -1) {
        alert('invalid');
        return;
      };
      if (!currentAttempt) {
        currentAttempt = thisButtonVal;
      } else {
        if (currentAttempt !== thisButtonVal) {
          updateAttemptsCounter(++attemptsCounter);
        } else {
          invalidButtons.push(thisButtonVal);
        }
        currentAttempt = null;
      }
    });

    function updateAttemptsCounter(val) {
      $('#attemptsCounter').html(val);
    }
  });
})(jQuery);