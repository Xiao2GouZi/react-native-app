import DeviceInfo from 'react-native-device-info';

/**
 *  获取设备API的级别, Android特有的
 * */
export const getAPILevel = () => {
    return DeviceInfo.getAPILevel();
}

/**
 *  获取APP的名字
 * */
export const getAPPName = () => {
    return DeviceInfo.getApplicationName()
}

/**
 *  获取电池 水平, Promise 对象,  ios 模理器返回-1
 * */
export const getBatteryLevel = () => {
    return DeviceInfo.getBatteryLevel()
}

/**
 *  获取设备的品牌
 * */
export const getBrand = () => {
    return DeviceInfo.getBrand();
}

/**
 *  获取应用构建的数字,   //ios返回的是字符串, 安卓返回的是数字
 * */
export  const getBuildNumber = () => {
    return DeviceInfo.getBuildNumber();
}

/**
 *  获取APP的BUBNDLEIID
 * */
export const getBundleId = () => {
    return DeviceInfo.getBundleId()
}

/**
 *  获取网络运营商的名字
 * */
export const getCarrier = () => {
    return DeviceInfo.getCarrier()
}

/**
 *  获取设备所在的地区
 * */
export const getDeviceCountry = () => {
    return DeviceInfo.getDeviceCountry()
}

/**
 *  获取设备号
 * */
export const getDeviceID = () => {
    return DeviceInfo.getDeviceId();
}

/**
 *  获取设备的语言
 * */
export const getDeviceLocale = () => {
    return DeviceInfo.getDeviceLocale()
}

/**
 *  获取设备的名称   //
 * */
export const getDeviceName = () => {
    return DeviceInfo.getDeviceName()
}

/**
 *  获取APP首次安装的时间
 * */
export const getFirstInstallTime = () =>{
    return DeviceInfo.getFirstInstallTime()
}

/**
 *  获取设备字体
 * */
export const getFontScale = () => {
    return DeviceInfo.getFontScale()
}

/**
 *  获取设备的存储大小,  单位字节
 * */
export const getFreeDiskStorage = () => {
    return DeviceInfo.getFreeDiskStorage()
}

/**
 *  获取设备的当钱IP地址,  promise对象
 * */
export const getIPAddress = () => {
    return DeviceInfo.getIPAddress()
}

/**
 *  获取应用程序ID
 * */
export const getInstanceID = () => {
    return DeviceInfo.getInstanceID()
}

/**
 *  获取APP上次更新时间
 * */
export const getLastUpdateTime = () => {
    return DeviceInfo.getLastUpdateTime()
}

/**
 *  获取网络适配器的MAC地址, promise
 * */
export const getMACAddress = () => {
    return DeviceInfo.getMACAddress()
}

/**
 *  获取设备制造厂商
 */
export const getManufacturer = () => {
    return DeviceInfo.getManufacturer()
}

/**
 *  获取设备系统名称
 * */
export const systemVersion = () => {
    return DeviceInfo.getSystemVersion()
}

/**
 *  获取APP的版本号
 * */
export const appVersion = () => {
    return DeviceInfo.getVersion()
}

/**
 *  获取设备系统版本号
 * */
export const getSystemVersion = () => {
    return DeviceInfo.getSystemVersion()
}

/**
 *  获取设备默认的时区
 * */
export const getTimezone = () => {
    return DeviceInfo.getTimezone()
}

/**
 *  获取整个磁盘的大小
 * */
export const getTotalDiskCapacity = () => {
    return DeviceInfo.getTotalDiskCapacity()
}

/**
 *  获取设备的唯一ID
 * */
export const getUniqueID = () => {
    return DeviceInfo.getUniqueID()
}

/**
 *  是否是模理器
 * */
export const isEmulator = () => {
    return DeviceInfo.isEmulator()
}

/**
 *  判断是否设置指纹
 * */
export const isPinOrFingerprintSet = (success: (isPinOrFingerprintSet: boolean) => void) => {
    DeviceInfo.isPinOrFingerprintSet(isPinOrFingerprintSet => {
        success(isPinOrFingerprintSet)
    })
}

/**
 *  判断是否是平板
 * */
export const isTablet = () => {
    return DeviceInfo.isTablet()
}

