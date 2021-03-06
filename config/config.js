var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tk_be'
    },
    port: process.env.PORT || 3000,
    /*db: 'mongodb://localhost:27017/tk_dev',*/
    db: 'mongodb://awais:awais@ds035563.mlab.com:35563/tk_dev',
    env: 'development',
    io: 8090,
    redis: 6379,
    host:  '127.0.0.1'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tk_be'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://awais:awais@ds035563.mlab.com:35563/tk_dev',
    env:'test',
    io: 8090,
    redis: 6379,
    host:  '127.0.0.1'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tk_be'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://awais:awais@ds035563.mlab.com:35563/tk_dev',
    env: 'production',
    io: 8090,
    redis: 6379,
    host:  '127.0.0.1'
  }
};

module.exports = config[env];
