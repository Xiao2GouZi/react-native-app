import { NavigationRouteConfigMap } from "react-navigation";

import HomeScreen from '../app/home';
import MeScreen from '../app/me';
import DetailScreen from '../app/detail'

import KitsScreen from '../app/kits';
import UIScreen from '../app/ui'

interface ITabBarConfig {
    icon: any,
    activeIcon: any,
    screenName: string,
    routeConfigMap: NavigationRouteConfigMap,
    title: string
}

const HomeRouteConfigMap:NavigationRouteConfigMap = {
    HomeScreen,
    DetailScreen
};

const KitRouteConfigMap:NavigationRouteConfigMap = {
    KitsScreen,
    DetailScreen
};

const UIRouteConfigMap:NavigationRouteConfigMap = {
    UIScreen,
    DetailScreen
};

const MeRouteConfigMap:NavigationRouteConfigMap = {
    MeScreen,
    DetailScreen
};




const tabConfig: ITabBarConfig[] = [{
    icon: require('../assets/images/home.png'),
    activeIcon: require('../assets/images/home_active.png'),
    screenName: 'HomeStack',
    routeConfigMap: HomeRouteConfigMap,
    title: '首页'
}, {
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
}, {
    icon: require('../assets/images/me.png'),
    activeIcon: require('../assets/images/me_active.png'),
    screenName: 'MeStack',
    routeConfigMap: MeRouteConfigMap,
    title: '我的'
}];

export default tabConfig