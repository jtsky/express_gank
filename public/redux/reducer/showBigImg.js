/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import {SHOW_BIG_IMG} from '../types';

export default function showBigImg(state = null, action) {
    switch (action.type) {
        case SHOW_BIG_IMG:
            return action.src;
        default:
            return state;
    }
}