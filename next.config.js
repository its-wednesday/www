const withTypescript = require('@zeit/next-typescript');
const path = require('path');

module.exports = withTypescript({
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');

    return config;
  }
});
