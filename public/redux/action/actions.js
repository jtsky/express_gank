/**
 * Created by Administrator on 2015/12/22.
 */
'use strict'
import {SHOW_GALLERY,SHOW_BIG_IMG} from '../types';


export function showGallery(elements){
    return{
        type : SHOW_GALLERY,
        elements
    }
}

export function showBigImg(src){
    return{
        type : SHOW_BIG_IMG,
        src
    }
}