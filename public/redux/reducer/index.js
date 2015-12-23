/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import { combineReducers } from 'redux';
import showBigImg from './showBigImg';
import showGallery from './showGallery';

const rootReducer = combineReducers({
    showGallery,
    showBigImg
});

export default rootReducer;