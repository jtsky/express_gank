/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import {SHOW_GALLERY,SHOW_BIG_IMG,IS_FINISHlOAD} from '../types';


export function showGallery(elements) {
    return {
        type: SHOW_GALLERY,
        elements
    }
}

export function isFinishLoad(isFinishLoad) {
    return {
        type: IS_FINISHlOAD,
        isFinishLoad
    }
}


export function showBigImg(src) {
    return {
        type: SHOW_BIG_IMG,
        src
    }
}