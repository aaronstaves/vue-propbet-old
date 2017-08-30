
let fbConfig = {};
try {
  fbConfig = require('./firebase.config');
}
catch(e) {
  // no config found, no worries
}

module.exports = {
  NODE_ENV: '"production"',
  fbConfig: fbConfig
}
