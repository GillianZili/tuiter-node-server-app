import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js';
import tuits from '../tuits/tuits.js';
const tuitsModel=mongoose.model('TuitModel',tuitsSchema);
export default tuitsModel;