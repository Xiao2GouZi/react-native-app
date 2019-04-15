import { NavigationRouteConfigMap } from "react-navigation";

import HomeScreen from '../app/home';
import MeScreen from '../app/me';
import DetailScreen from '../app/detail'



interface ITabBarConfig {
    icon: string,
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
    icon: "shouye",
    screenName: 'HomeStack',
    routeConfigMap: HomeRouteConfigMap,
    title: '首页'
},
  {
    icon: "geren",
    screenName: 'MeStack',
    routeConfigMap: MeRouteConfigMap,
    title: '我的'
}];

export default tabConfig