'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function logger(cursor) {
  cursor.on('update', function (e) {
    if (typeof console !== 'undefined') {
      (function () {
        var prevState = e.data.previousData;
        var actions = e.data.transaction || [];
        var nextState = e.data.currentData;
        var time = new Date();

        actions.map(function (action) {
          var message = 'action ' + JSON.stringify(action.path) + '.' + action.type + ' @ ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

          try {
            console.group(message);
          } catch (e) {
            console.log('NOT GROUP');
          }

          console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
          console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
          console.log('%c next state', 'color: #29bf2f; font-weight: bold', nextState);

          try {
            console.groupEnd('—— log end ——');
          } catch (e) {
            console.log('—— log end ——');
          }
        });
      })();
    }
  });
}

exports['default'] = logger;
module.exports = exports['default'];