import { NavigationRouteConfigMap } from "react-navigation";

import HomeScreen from '../app/home';
import MeScreen from '../app/me';
import DetailScreen from '../app/detail'



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
},
  {
    icon: require('../assets/images/me.png'),
    activeIcon: require('../assets/images/me_active.png'),
    screenName: 'MeStack',
    routeConfigMap: MeRouteConfigMap,
    title: '我的'
}];

export default tabConfig