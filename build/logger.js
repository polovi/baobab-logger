'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var pad = function pad(num) {
  return ('0' + num).slice(-2);
};

function createLogger(cursor) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  cursor.on('update', function (e) {
    var collapsed = options.collapsed;
    var _options$level = options.level;
    var level = _options$level === undefined ? 'log' : _options$level;
    var _options$logger = options.logger;
    var logger = _options$logger === undefined ? window.console : _options$logger;
    var _e$data = e.data;
    var previousData = _e$data.previousData;
    var currentData = _e$data.currentData;

    var actions = e.data.transaction || [{ path: e.target.path, type: e.type }];
    var time = new Date();

    actions.map(function (action) {
      var message = 'Baobab ' + JSON.stringify(action.path) + '.' + action.type + ' @ ' + time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());

      try {
        console[options.collapsed ? 'groupCollapsed' : 'group'](message);
      } catch (e) {
        console.log('---------');
      }

      logger[level]('%c prev state ', 'color: #9E9E9E; font-weight: bold', previousData);
      logger[level]('%c action', 'color: #03A9F4; font-weight: bold', action);
      logger[level]('%c next state ', 'color: #29bf2f; font-weight: bold', currentData);

      try {
        console.groupEnd();
      } catch (e) {
        console.log('---------');
      }
    });
  });
}

exports['default'] = createLogger;
module.exports = exports['default'];