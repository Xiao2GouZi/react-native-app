import { NavigationRouteConfigMap } from "react-navigation";


import KitsScreen from '../app-test/kits';
import UIScreen from '../app-test/ui'

import DeviceInfo from '../app-test/device-info'
import Toast from '../app-test/toast'

interface ITabBarConfig {
    icon: string,
    screenName: string,
    routeConfigMap: NavigationRouteConfigMap,
    title: string
}


const KitRouteConfigMap:NavigationRouteConfigMap = {
    KitsScreen,
    DeviceInfo
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