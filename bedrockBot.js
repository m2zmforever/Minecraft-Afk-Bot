// Bedrock Edition Bot
const { Client } = require('bedrock-protocol');

module.exports = function(config) {
  let client;
  function startBot() {
    const clientOptions = {
      host: config.host,
      port: config.port,
      username: config.username,
      offline: true, 
    };
    client = new Client(clientOptions);

    client.on('join', () => {
      console.log('Bedrock bot joined!');
    });

    client.on('disconnect', () => {
      console.log('Bedrock bot disconnected. Reconnecting in 5s...');
      if (config.autoReconnect) setTimeout(startBot, 5000);
    });

    client.on('error', (err) => {
      console.log('Error:', err);
    });
  }
  startBot();
};
