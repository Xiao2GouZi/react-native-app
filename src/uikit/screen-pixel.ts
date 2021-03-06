

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */

// import {
//     Dimensions,
//     PixelRatio,
// } from 'react-native';
//
//
// const deviceWidth = Dimensions.get('window').width;      //设备的宽度
// const deviceHeight = Dimensions.get('window').height;    //设备的高度
// let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例
//
// let pixelRatio = PixelRatio.get();      //当前设备的像素密度
// const defaultPixel = 2;                           //iphone6的像素密度
// //px转换成dp
// const w2 = 750 / defaultPixel;
// const h2 = 1334 / defaultPixel;
// const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例
// /**
//  * 设置text为sp
//  * @param size sp
//  * return number dp
//  */
// function setSpText(size: number) {
//     size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
//     return size / defaultPixel;
// }
//
// function scaleSize(size: number) {
//     size = Math.round(size * scale + 1);
//     return size / defaultPixel;
// }
//



/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */


import {
    Dimensions,
    PixelRatio,
} from 'react-native';

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();
const r2=2;
const w2 = 750/r2;
const h2 = 1334/r2;
/**
 * 设置text为sp
 * @param size  sp
 * @returns {Number} dp
 */
export const DEFAULT_DENSITY=2;
function setSpText(size: number) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size;
}
/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 * @constructor
 */
function scaleSize(size: number) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size/DEFAULT_DENSITY;
}

export default {
    setSpText,
    scaleSize
}
