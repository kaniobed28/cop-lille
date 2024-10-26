const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cop-lille',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

