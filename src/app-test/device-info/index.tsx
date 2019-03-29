

import * as React from 'react'
import { ScrollView,View, Text, StyleSheet, ViewStyle } from 'react-native'
import {DeviceInfo} from '../../t-rd'
import { Theme, UiKitTypes } from '../../uikit';

interface IProps {

}

export default class KitDeviceInfo extends React.PureComponent<IProps, any> {

    static navigationOptions = (item: UiKitTypes.NavigationScreenProps) =>  {
        let {navigation: {getParam}} = item;
        return {
            title: getParam('name') || '',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            batteryLevel: 0,
            isPinOrFingerprintSet: false,
            ipAddress: '',
            macAddress: ''
        }
    }

    async componentDidMount() {
        let batteryLevel = await  DeviceInfo.getBatteryLevel();
        console.log('---  batteryLevel  ---', batteryLevel);
        let ipAddress = await DeviceInfo.getIPAddress();
        let macAddress = await DeviceInfo.getMACAddress();
        this.setState({
            batteryLevel,
            ipAddress,
            macAddress
        });

        DeviceInfo.isPinOrFingerprintSet(isPinOrFingerprintSet => {


            console.log('--------isPinOrFingerprintSet', isPinOrFingerprintSet)

            this.setState({
                isPinOrFingerprintSet
            });
        })
    }

    render(){
        let {batteryLevel, isPinOrFingerprintSet, ipAddress, macAddress} = this.state;
        return(
            <ScrollView style={styles.contain}>
                <View style={styles.item}>
                    <Text>app版本号:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.appVersion()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text>设备API的级别, Android特有的:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getAPILevel()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> APP的名字:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getAPPName()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 电池容量:
                        <Text style={{color: Theme.colors.brandSecondary}}>{batteryLevel}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备的品牌:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getBrand()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 应用构建的数字:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getBuildNumber()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> APP的BUBNDLEIID:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getBundleId()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 网络运营商的名字:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getCarrier()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备所在的地区:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getDeviceCountry()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备语言:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getDeviceLocale()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备的名称:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getDeviceName()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> APP首次安装的时间:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getFirstInstallTime()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备字体:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getFontScale()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备的存储大小:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getFreeDiskStorage()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备的当前IP地址:
                        <Text style={{color: Theme.colors.brandSecondary}}>{ipAddress}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 应用程序ID:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getInstanceID()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备字体:id
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getFontScale()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> APP上次更新时间:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getLastUpdateTime()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 网络适配器的MAC地址:
                        <Text style={{color: Theme.colors.brandSecondary}}>{macAddress}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备制造厂商:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getManufacturer()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备系统名称:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getSystemVersion()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> APP的版本号:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.appVersion()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备系统版本号:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getSystemVersion()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备默认的时区:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getTimezone()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 整个磁盘的大小:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getTotalDiskCapacity()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 设备的唯一ID:
                        <Text style={{color: Theme.colors.brandSecondary}}>{DeviceInfo.getUniqueID()}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 是否是模理器:
                        <Text style={{color: Theme.colors.brandSecondary}}>{String(DeviceInfo.isEmulator())}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 是否设置指纹:
                        <Text style={{color: Theme.colors.brandSecondary}}>{isPinOrFingerprintSet}</Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text> 是否是平板:
                        <Text style={{color: Theme.colors.brandSecondary}}>{String(DeviceInfo.isTablet())}</Text>
                    </Text>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: '#eee'
    } as ViewStyle,

    item: {
        backgroundColor: '#fff',
        borderBottomColor: Theme.border.color,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 44
    } as ViewStyle



})