const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));

if (config.edition === 'java') {
  require('./javaBot')(config);
} else if (config.edition === 'bedrock') {
  require('./bedrockBot')(config);
} else {
  console.error('Invalid edition in config.json. Use "java" or "bedrock".');
  process.exit(1);
}
