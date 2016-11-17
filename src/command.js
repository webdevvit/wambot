var EventBuss = require('./lib/event-buss.js');

module.exports = {
  process(data) {
    this.channel = data.channel;

    this.run(data);
  },

  say(msg, channel) {
    var channel = channel || this.channel;

    this.engine.say(channel, msg);
  },

  shouldRun(message) {
    return (message.match(this.triggerRegex()) !== null);
  },

  triggerRegex() {
    if(this.match) {
      return this.match;
    } else {
      return new RegExp(this._escapeRegExp(this.engine.token) + this.name);
    }
  },

  create(command) {
    return Object.assign({}, EventBuss, command, this);
  },

  _escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
};
