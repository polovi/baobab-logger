# Logger for Baobab
Logger for [Baobab](https://github.com/Yomguithereal/baobab/tree/v2) inspired by [redux-logger](https://github.com/fcomb/redux-logger).

![baobab-logger](http://i.imgur.com/mZ9oMrF.png?1)

## Install
```cmd
$ npm install --save baobab-logger

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

logger(tree, { collapsed: true });
logger(tree.select('palette'));
```

## Configuration
```js
logger(cursor[, options])
```

### Options

#### collapsed (Boolean)
Output informations grouped or not.

*Default: `false`*

#### logger (Object)
`console` implementation API or custom wrapped library for output.

*Default: `window.console`*

#### level (String)
Log level type: `log`, `info`, `warn`, `error`.

*Default: `log`*


## License
Released under the MIT license.

## Credits & Notes
This logger is largely based on [redux-logger](https://github.com/fcomb/redux-logger) licensed under the MIT license.
