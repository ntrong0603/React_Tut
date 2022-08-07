import logger, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './logger.js';
// import { TYPE_1, TYPE_2 } from './constants.js';
import * as constants from './constants.js';

console.log(logger);
console.log(typeof logger);
logger("Test message", TYPE_LOG);
logger("Test message", TYPE_WARN);
logger("Test message", TYPE_ERROR);
console.log(constants);
console.log(constants.TYPE_1);
console.log(constants.TYPE_2);