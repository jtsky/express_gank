/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import {SHOW_GALLERY} from '../types';

export default function showGallery(state = [], action) {
    switch (action.type) {
        case SHOW_GALLERY:
            return state.concat(action.elements);
        default:
            return state;
    }
}