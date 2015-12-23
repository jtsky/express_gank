/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import { createStore } from 'redux';
import rootReducer from '../reducer/index';

export default function configureStore(initialState = {showGallery: [], showBigImg: null}) {
    let store = createStore(rootReducer, initialState);
    return store;
}
