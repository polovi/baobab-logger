const pad = num => ('0' + num).slice(-2);

function createLogger(cursor, options = {}) {
  cursor.on('update', function(e) {
    const {collapsed, level = 'log', logger = window.console} = options;
    const {previousData, currentData} = e.data;
    const actions = e.data.transaction || [{path: e.target.path, type: e.type}];
    const time = new Date();

    actions.map(function(action) {
      let message = `Baobab ${JSON.stringify(action.path)}.${action.type} @ ${time.getHours()}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

      try {
        console[options.collapsed ? 'groupCollapsed' : 'group'](message);
      } catch(e) {
        console.log('---------');
      }

      logger[level](`%c prev state `, `color: #9E9E9E; font-weight: bold`, previousData);
      logger[level](`%c action`, `color: #03A9F4; font-weight: bold`, action);
      logger[level](`%c next state `, `color: #29bf2f; font-weight: bold`, currentData);


      try {
        console.groupEnd();
      } catch(e) {
        console.log('---------');
      }

    });

  });
}

export default createLogger;
