import {uniq} from 'lodash';
import Logger from './src/Logger';

const nums = [1,1,2,2,3,3,4,4,6,7,8,9,9];
const logger = new Logger();
logger.log(uniq(nums));