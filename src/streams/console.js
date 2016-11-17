var EventBuss = require('../lib/event-buss.js');

module.exports = Object.assign({}, EventBuss, {
  init() {
    console.log('USING THE CONSOLE STREAM');
  },

  say(channel, str) {
    console.log('Message: ' + str);
  },

  inject(nick, channel, message) {
    console.log('-- INJECTED --');
    console.log('- nick: ' + nick);
    console.log('- channel: ' + channel);
    console.log('- message: ' + message);
    console.log('--------------');

    this.trigger('message', {nick: nick, channel: channel, message: message});
  }
});
