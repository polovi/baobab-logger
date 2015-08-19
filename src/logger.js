function logger(cursor) {
  cursor.on('update', function(e) {
    if (typeof console !== 'undefined') {
      const prevState = e.data.previousData;
      const actions = e.data.transaction || [];
      const nextState = e.data.currentData;
      const time = new Date();

      actions.map(function(action) {
        let message = `action ${JSON.stringify(action.path)}.${action.type} @ ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        try {
          console.group(message);
        } catch(e) {
          console.log('NOT GROUP');
        }

        console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
        console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
        console.log(`%c next state`, `color: #29bf2f; font-weight: bold`, nextState);

        try {
          console.groupEnd('—— log end ——');
        } catch(e) {
          console.log('—— log end ——');
        }
      });
    }
  });
}

export default logger;
