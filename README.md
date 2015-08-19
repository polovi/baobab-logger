# Logger for [Baobab](https://github.com/Yomguithereal/baobab)
Logger for Baobab inspired by [redux-logger](https://github.com/fcomb/redux-logger).

## Install
```cmd
$ nmp install -save baobab-logger

```

## Usage
```js
import Baobab from 'baobab';
import logger from 'baobab-logger';

const tree = new Baobab({
  palette: {
    colors: ['yellow', 'purple'],
    name: 'Glorious colors'
  }
});

logger(tree);
```
> Need to be Baobab root, because cursors have only reduced informations about change.

## License
Released under the MIT license.

## Credits & Notes
This logger is largely based on [redux-logger](https://github.com/fcomb/redux-logger) licensed under the MIT license.
