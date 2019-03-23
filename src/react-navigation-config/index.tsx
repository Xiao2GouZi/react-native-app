
import { createStackNavigator, createAppContainer,  createBottomTabNavigator,
    // NavigationState, NavigationAction
    NavigationActions,
    NavigationRouteConfigMap ,StackActions,
    StackNavigatorConfig, NavigationContainer,
    NavigationStackScreenOptions, NavigationTabScreenOptions, NavigationDrawerScreenOptions,NavigationNavigateAction,
    // NavigationScreenProp, NavigationRoute,
    BottomTabNavigatorConfig, NavigationScreenConfig, NavigationBottomTabScreenOptions, NavigationContainerComponent
} from "react-navigation";
import * as React from 'react'
import {DeviceEventEmitter, Text, Image} from 'react-native'

import {Theme} from '../uikit'
import Config from '../config'

import TabBarConfig from './config'

const tabBarOptionsIOS = {
    activeTintColor: Theme.navigation.activeTintColor,         //活动选项卡的标签和图标颜色
    activeBackgroundColor: '#fff',                             //活动选项卡的背景颜色
    inactiveTintColor: Theme.navigation.inactiveTintColor,     //非活动选项卡的标签和图标颜色
    inactiveBackgroundColor: '#fff',                           //非活动选项卡的背景颜色
    showLabel: true,                                           //是否为标签显示标签，默认为true。
    style: {},                                                 //标签栏的样式对象
    labelStyle: {},                                            //选项卡标签的样式对象
    tabStyle: {},                                              //选项卡的样式对象。
    allowFontScaling: true,                                    //标签字体是否应缩放以符合“文本大小”辅助功能设置，默认为true。
};

const tabBarOptionsAndroid = {
    activeTintColor: Theme.navigation.activeTintColor,         //活动选项卡的标签和图标颜色
    inactiveTintColor: Theme.navigation.inactiveTintColor,     //非活动选项卡的标签和图标颜色
    showIcon: false,                                           //是否显示选项卡的图标，默认为false
    showLabel: true,                                           //是否为标签显示标签，默认为true。
    upperCaseLabel: true,                                      // 是否将标签设为大写，默认为true
    pressColor: '',                                            //材质波纹的颜色（Android> =仅限5.0）。
    pressOpacity: 1,                                           //按下选项卡的不透明度（仅适用于iOS和Android <5.0）
    scrollEnabled: false,                                      //是否启用可滚动选项卡
    tabStyle: {},                                              //选项卡的样式对象。
    indicatorStyle: {},                                        //选项卡指示器的样式对象（选项卡底部的行）
    labelStyle: {},                                            //选项卡标签的样式对象
    iconStyle: {},                                             //选项卡图标的样式对象
    style: {},                                                 //标签栏的样式对象
    allowFontScaling: true,                                     //标签字体是否应缩放以符合“文本大小”辅助功能设置，默认为true。
};


let _defaultTabNavigationOptions: NavigationScreenConfig<NavigationBottomTabScreenOptions> = ({ navigation }) =>{
    let {state: {key, index}} = navigation;
    return {
        tabBarIcon: function({focused} : { focused: boolean }) {
            let selectedTabBar = TabBarConfig.filter(item => item.screenName === key);
            let imageSource = focused ? selectedTabBar[0].activeIcon : selectedTabBar[0].icon
            return <Image source={imageSource}/>
        },
        tabBarLabel: function({tintColor}: {tintColor: string}){
            let selectedTabBar = TabBarConfig.filter(item => item.screenName === key);
            return <Text style={{color: tintColor}}>{selectedTabBar[0].title}</Text>
        },
        tabBarOnPress: function ({defaultHandler}) {
            defaultHandler()
        },
        tabBarVisible: !index
    }
};

const drawConfig:BottomTabNavigatorConfig  = {
    tabBarOptions: Config.isIOS ? tabBarOptionsIOS : tabBarOptionsAndroid,
    tabBarPosition: 'bottom',  //标签栏的位置，可以是'top'或'bottom'。
    animationEnabled: true,   // 更改选项卡时是否设置动画。
    lazy: true,  //默认为true。如果false，立即渲染所有选项卡。当true标签仅在第一次激活时才会呈现。注意：后续访问时不会重新呈现选项卡
    removeClippedSubviews: true,  //默认为true。通过释放非活动选项卡使用的资源来减少内存使用的优化。
    initialLayout: {
        height: Theme.values.deviceHeight,
        width: Theme.values.deviceWidth
    },  //包含initial height和的可选对象width，可以传递以防止react-native-tab-view呈现中的一帧延迟。
    defaultNavigationOptions: _defaultTabNavigationOptions
};


function _createStackNavigator(routeConfigMap: NavigationRouteConfigMap, stackConfig?: StackNavigatorConfig): NavigationContainer{
    return createStackNavigator(routeConfigMap, stackConfig)
}

function _createBottomTabNavigator(routeConfigMap: NavigationRouteConfigMap, drawConfig?: BottomTabNavigatorConfig): NavigationContainer {
    return createBottomTabNavigator(routeConfigMap, drawConfig);
}

const _defaultNavigationOptions:NavigationStackScreenOptions & NavigationTabScreenOptions & NavigationDrawerScreenOptions = {
    headerTitleAllowFontScaling: true,   //标题标题字体是否应缩放以遵守“文本大小”辅助功能设置。默认为true
    headerStyle: {
        backgroundColor: Theme.navigation.backgroundColor
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTintColor: Theme.navigation.titleColor,        //标题的色调
    gesturesEnabled: Config.isIOS,   //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false。
    gestureResponseDistance: {    //用于覆盖从屏幕边缘开始触摸的距离以识别手势的对象
        vertical: 25,
        horizontal: 135
    },
    gestureDirection: 'default',   //用于覆盖关闭手势方向的字符串。default用于正常行为或inverted从右向左滑动。
};

const StackConfig:StackNavigatorConfig = {
    mode: 'card',    //屏幕过度效果
    headerMode: 'float',   //头部切换效果
    headerBackTitleVisible: false,    //是否隐藏返回键后面标题
    headerTransitionPreset: 'uikit',   //headerMode: float  头部如何重一个页面切换到拧一个
    headerLayoutPreset: 'center',     //头部标题的位置
    transparentCard: true,
    defaultNavigationOptions: _defaultNavigationOptions
};

function routeConfigMap():NavigationRouteConfigMap {
    let tabBarRoutes: any = {};
    TabBarConfig.filter(item => {
        tabBarRoutes[item.screenName] = _createStackNavigator(item.routeConfigMap, StackConfig)
    });
    return tabBarRoutes
}

const TabNavigator = _createBottomTabNavigator(routeConfigMap(), drawConfig)
let AppContainer = createAppContainer(TabNavigator);

export default class Index extends React.PureComponent {
    navigation: NavigationContainerComponent;
    componentDidMount() {
        DeviceEventEmitter.addListener('NavigationPush', this.push);
        DeviceEventEmitter.addListener('NavigationPop', this.pop);
        DeviceEventEmitter.addListener('NavigationPopToTop', this.popToTop);
        DeviceEventEmitter.addListener('NavigationReplace', this.replace);
        DeviceEventEmitter.addListener('NavigationReset', this.reset);
        DeviceEventEmitter.addListener('NavigationNavigate', this.navigate);
        DeviceEventEmitter.addListener('NavigationBack', this.back)
    }

    render(){
        return <AppContainer ref={ e => this.navigation = e}
                             // onNavigationStateChange={this.handleNavigationChange}
        />
    }

    // handleNavigationChange = ( prevNavigationState: NavigationState, nextNavigationState: NavigationState, action: NavigationAction) => {
    //     // console.log(' ---- prevNavigationState ----', prevNavigationState);
    //     // console.log(' ---- nextNavigationState ----', nextNavigationState);
    //     // console.log(' ---- action ----', action)
    //
    // }


    push = ({route, params}) => {
        console.log('----- pusn navigate param', this.navigation);
        this.navigation.dispatch(StackActions.push({routeName: route, params}))
    };

    pop = ({n, immediate}) => {
        this.navigation.dispatch(StackActions.pop({n, immediate}))
    };

    popToTop = ({key, immediate}: {key: string, immediate: boolean}) => {
        this.navigation.dispatch(StackActions.popToTop({key, immediate}))
    };

    replace = ({routeName, params}: {routeName: string, params: any}) => {
        this.navigation.dispatch(StackActions.replace({routeName, params}))
    };

    reset = ({index, actions}: {index: number, actions: NavigationNavigateAction[]}) => {
        this.navigation.dispatch(StackActions.reset({index, actions}))
    };

    navigate = ({routeName, params}: {routeName: string, params: any}) => {
        this.navigation.dispatch(NavigationActions.navigate({routeName, params}))
    };

    back = ({key}: {key?: string | null}) => {
        this.navigation.dispatch(NavigationActions.back({key}))
    }




}
