module.exports = {
  Engine: require('./src/engine.js'),
  Command: require('./src/command.js'),

  streams: {
    irc: require('./src/streams/irc.js'),
    console: require('./src/streams/console.js')
  }
};
