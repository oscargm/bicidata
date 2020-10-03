/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.srcPath = resolveFromRootPath('src');
exports.buildPath = resolveFromRootPath('build');
exports.distPath = resolveFromRootPath('dist');
exports.assetsPath = resolveFromRootPath('src', 'assets');
exports.podsPath = resolveFromRootPath('src', 'pods');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
/*const PATIENTS_URL = process.env.PATIENTS_URL || `${BASE_URL}/patients`;
const CONFIGURATIONS_URL =
  process.env.CONFIGURATIONS_URL || `${BASE_URL}/configurations`;
*/
exports.endpoints = {
  /*__PATIENTS_URL__: JSON.stringify(PATIENTS_URL),
  __CONFIGURATIONS_URL__: JSON.stringify(CONFIGURATIONS_URL),*/
};
