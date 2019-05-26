import { NavigationRouteConfigMap } from "react-navigation";


import KitsScreen from '../app-test/kits';
import UIScreen from '../app-test/ui'

import DeviceInfo from '../app-test/kits/device-info'
import IconFont from '../app-test/kits/iconfont';
import Mock from '../app-test/kits/mock'



import Toast from '../app-test/ui/toast'

interface ITabBarConfig {
    icon: string,
    screenName: string,
    routeConfigMap: NavigationRouteConfigMap,
    title: string
}


const KitRouteConfigMap:NavigationRouteConfigMap = {
    KitsScreen,
    DeviceInfo,
    IconFont,
    Mock
};

const UIRouteConfigMap:NavigationRouteConfigMap = {
    UIScreen,
    Toast
};



const tabConfig: ITabBarConfig[] = [{
    icon: "geren",
    screenName: 'KitStack',
    routeConfigMap: KitRouteConfigMap,
    title: 'Kits'
}, {
    icon: 'geren',
    screenName: 'UIStack',
    routeConfigMap: UIRouteConfigMap,
    title: 'UI'
}];

export default tabConfig