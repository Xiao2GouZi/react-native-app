
import * as TSTypes from "../types";

/**
 * object 拼接到url后
 */
export const urlQuery = (param: object) => {
    const arr = [];
    for(const i in param){
        if (param.hasOwnProperty(i)) {
            arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(param[i]));
        }
    }
    return arr.join("&");
};

/**
 * url-query转成object
 */
export const urlObject = (url: string) => {
    const param = url.split('?')[1].split('&');
    const res = {};
    param.forEach(item => {
        const str = item.split('=');
        if( str[0] !== '' ) {
            res[str[0]]=str[1];
        }
    });
    return res;
};

/**
 *  数据类型
 *
 *  ''        ---->   String
 *  {}        ---->   Object
 *  []        ---->   Array
 *  () => {}  ---->   Function
 *  1         ---->   Number
 *  false     ---->   Boolean
 *  null      ---->   Null
 *  undefined ---->   Undefined
 *            ---->   Undefined
 *  /at/      ---->   RegExp
 *  new Date()---->   Date
 *
 */
export const dataType = (data: any): TSTypes.EDataType => {
    const stringPro = Object.prototype.toString.call(data);
    const type = stringPro.split(' ')[1];
    return type.slice(0, type.length - 1)
};

/**
 *  过滤数据中的null, undefined为空字符串
 */
export const dataNoNull = (data: any) => {
    switch (dataType(data)) {
        case TSTypes.EDataType.Object: {
            data = dataObject(data);
            break
        }
        case TSTypes.EDataType.Array:{
            data = dataArray(data);
            break
        }
        case TSTypes.EDataType.Null || TSTypes.EDataType.Undefined :{
            data = '';
            break
        }
        default:{
            break
        }
    }
    return data
};

const dataObject = (object: object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            object[key] = dataNoNull(object[key]);
        }
    }
    return object
};

const dataArray = (array: any[]) => {
    return array.map(item => {
        return dataNoNull(item)
    })
};

let globalLastTapTime = 0;

/**
 *  解决重复点击
 * */
export const preventMoreTap = () => {
    let globaTime = globalLastTapTime;
    let time = new Date().getTime();
    globalLastTapTime = time;
    return Math.abs(time-globaTime) < 400 && globaTime != 0
}

