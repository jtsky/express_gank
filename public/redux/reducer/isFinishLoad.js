/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import {IS_FINISHlOAD} from '../types';

export default function isFinishLoad(state = false, action) {
    switch (action.type) {
        case IS_FINISHlOAD:
            return action.isFinishLoad;
        default:
            return state;
    }
}