const {alias, configPaths} = require('react-app-rewire-alias');

const aliasPaths = configPaths('./alliasPath.json');

module.exports = alias(aliasPaths);