// Modules :Import / Export
// Để import một modules vào thì chính nó cũng là một modules
// trong file html phải có type ='module'
import * as constant from './constant.js'
import logger from './logger.js';
// logger('message...',TYPE_WARN)
console.log(logger())