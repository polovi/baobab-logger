const pad = num => ('0' + num).slice(-2);

export default function createLogger(cursor, options = {}) {
  cursor.on('update', function(e) {
    const {collapsed, level = 'log', logger = window.console} = options;
    const {previousData, currentData} = e.data;
    const actions = e.data.transaction || [{path: e.target.path, type: e.type, value: e.target.get()}];
    const time = new Date();
    let message = `₸ Baobab ${JSON.stringify(actions.map((action) => action.type))} @ ${time.getHours()}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

    try {
      console[options.collapsed ? 'groupCollapsed' : 'group'](message);
    } catch(e) {
      console.log(`%c ${message}`, 'font-weight: bold');
    }

    logger[level](`%c prev state`, 'color: #9E9E9E; font-weight: bold', previousData);

    if (actions.length !== 1) {
      try {
        console.group('actions:');
      } catch(e) {}
    }

    actions.forEach(function(action) {
      logger[level](`%c ${JSON.stringify(action.path)}.${action.type}`, 'color: #03A9F4; font-weight: bold', action.value);
    });

    if (actions.length !== 1) {
      try {
        console.groupEnd();
      } catch(e) {}
    }

    logger[level](`%c next state `, 'color: #29bf2f; font-weight: bold', currentData);

    try {
      console.groupEnd();
    } catch(e) {
      console.log("\n");
    }
  });
}
