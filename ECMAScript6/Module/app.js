//module (import - export)

import logger from './logger.js'
// import {
// 	TYPE_ERROR, TYPE_LOG, TYPE_WARN
// } from './constants.js'

//import k co {} la phai import truc tiep cai dc export ra
import * as constants from './constants.js'
console.log(constants)
logger("msg")