import {Platform} from 'react-native'
import {DeviceInfo} from '../t-rd'

interface IConfig {
    host: string,
    requestTimeOut: number,
    isDev: boolean,
    defaultImage: string,
    isIOS: boolean,
    isAllScreen: boolean,
    isAppTest: boolean
}


const Config: IConfig = {
    host: '',
    requestTimeOut: 10,
    isDev: process.env.NODE_ENV === 'development',
    defaultImage: '',
    isIOS: Platform.OS === 'ios',
    isAllScreen: DeviceInfo.getDeviceID().indexOf('iPhone10,3') > -1
    || DeviceInfo.getDeviceID().indexOf('iPhone10,6') > -1
    || DeviceInfo.getDeviceID().indexOf('iPhone11') > -1,
    isAppTest: true
};


export default Config
