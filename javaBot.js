// Java Edition Bot
const mineflayer = require('mineflayer');

module.exports = function(config) {
  let bot;
  function startBot() {
    const botOptions = {
      host: config.host,
      port: config.port,
      username: config.username,
    };

    if (config.password && config.password !== "" && config.password !== "your_password_if_needed") {
      botOptions.password = config.password;
    } else {
      botOptions.auth = 'offline';
    }
    bot = mineflayer.createBot(botOptions);

    bot.on('login', () => {
      console.log('Java bot logged in!');
    });

    bot.on('end', () => {
      console.log('Java bot disconnected. Reconnecting in 5s...');
      if (config.autoReconnect) setTimeout(startBot, 5000);
    });

    bot.on('kicked', (reason) => {
      console.log('Kicked:', reason);
    });

    bot.on('error', (err) => {
      console.log('Error:', err);
    });
  }
  startBot();
};
