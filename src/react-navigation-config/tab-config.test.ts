import { NavigationRouteConfigMap } from "react-navigation";


import KitsScreen from '../app-test/kits';
import UIScreen from '../app-test/ui'

import DeviceInfo from '../app-test/device-info'

interface ITabBarConfig {
    icon: any,
    activeIcon: any,
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
};






const tabConfig: ITabBarConfig[] = [{
    icon: require('../assets/images/text.png'),
    activeIcon: require('../assets/images/text_active.png'),
    screenName: 'KitStack',
    routeConfigMap: KitRouteConfigMap,
    title: 'Kits'
}, {
    icon: require('../assets/images/component.png'),
    activeIcon: require('../assets/images/component_active.png'),
    screenName: 'UIStack',
    routeConfigMap: UIRouteConfigMap,
    title: 'UI'
}];

export default tabConfig