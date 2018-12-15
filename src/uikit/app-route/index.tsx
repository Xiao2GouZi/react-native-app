import * as React from "react";
import { createStackNavigator, NavigationActions} from 'react-navigation';
import {TouchableOpacity, View, StyleSheet, Platform, DeviceEventEmitter, Image} from 'react-native'
import Theme from '../theme'
import {AppRoute} from '../types'
import {Utils} from '../../common'

let navigation: any;

export default class AppNavigation extends React.Component<AppRoute, any> {

    componentDidMount() {
        DeviceEventEmitter.addListener(`route:navigate`, this.navigate);
        DeviceEventEmitter.addListener('route:push', this.push);
        DeviceEventEmitter.addListener('route:goBack', this.goBack);
        DeviceEventEmitter.addListener('route:popToTop', this.popToTop);
        DeviceEventEmitter.addListener('route:pop', this.pop);
        DeviceEventEmitter.addListener('route:replace', this.replace);
        DeviceEventEmitter.addListener('route:dispatchBack', this.dispatchBack);
        DeviceEventEmitter.addListener('route:dispatchInit', this.dispatchInit);
        DeviceEventEmitter.addListener('route:dispatchSetParam', this.dispatchSetParam);
        DeviceEventEmitter.addListener('route:dispatchNavigate', this.dispatchNavigate)
        DeviceEventEmitter.addListener('route:reset', this.reset);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeListener('route:navigate', this.navigate);
        DeviceEventEmitter.removeListener('route:push', this.push);
        DeviceEventEmitter.removeListener('route:goBack', this.goBack);
        DeviceEventEmitter.removeListener('route:popToTop', this.popToTop);
        DeviceEventEmitter.removeListener('route:pop', this.pop);
        DeviceEventEmitter.removeListener('route:replace', this.replace);
        DeviceEventEmitter.removeListener('route:dispatchBack', this.dispatchBack);
        DeviceEventEmitter.removeListener('route:dispatchInit', this.dispatchInit);
        DeviceEventEmitter.removeListener('route:dispatchSetParam', this.dispatchSetParam);
        DeviceEventEmitter.removeListener('route:dispatchNavigate', this.dispatchNavigate)

        DeviceEventEmitter.removeListener('route:reset', this.reset);
    }



    render() {
        let {screen, initialRouteName, initialRouteParams} = this.props;
        const AppNavigator = createStackNavigator(screen,
            {
                initialRouteName: initialRouteName,
                initialRouteParams: initialRouteParams,
                navigationOptions:(navigation) => StackOptions(navigation)
            }
        );
        return(
            <AppNavigator onNavigationStateChange={this.onNavigationStateChange}/>
        )
    }

    onNavigationStateChange = (preState, newState, action) => {   //路由改变时触发的方法
        if (__DEV__) {
            console.log('onNavigationStateChange -- preState, newState, action',preState, newState, action);
        }
    };


    navigate = ({routeName, params}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('routeName ---- routeName, param', routeName);
            console.log('params ---- ', params);
        }
        navigation.navigate(routeName, params);
    };

    push = ({routeName, params, action}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('routeName ---- routeName, param', routeName);
            console.log('param ---- ', params);
            console.log('action ---- ', action);
            // console.log('navigation ---', navigation)
        }
        navigation.push(routeName, params, action)
    };

    goBack = () => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('navigate -- go -- back')
        }
        navigation.goBack()
    };


    popToTop = () => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('pop -- to -- top')
        }
        navigation.popToTop()
    };

    pop = (route: number) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('pop -- ', route)
        }
        navigation.pop(route)
    };

    replace = ({routeName, params}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('replace --- routeName, param', routeName, params)
        }
        navigation.replace(routeName, params)
    };

    dispatchBack = ({key}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('dispatch --- back -- key', key)
        }
        const backAction = NavigationActions.back({
            key: key,
        });
        navigation.dispatch(backAction);
    };

    dispatchInit = () => {

    };

    dispatchSetParam = ({param, key}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('dispatch -- set -- param, key', param, key)
        }
        const setParamsAction = NavigationActions.setParams({
            params: param,
            key: key,
        });
        navigation.dispatch(setParamsAction);
    };

    dispatchNavigate = ({routeName, params, key, action}) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('dispatch -- navigate   routeName, params, key, action', routeName, params, key, action)
        }
        const navigateAction = NavigationActions.navigate({
            routeName: routeName,
            params: params,
            key: key,
            action: action
        });
        navigation.dispatch(navigateAction);
    };

    reset = (routeName) => {
        if (Utils.preventMoreTap()) return
        if (__DEV__) {
            console.log('reset --- routeName', routeName)
        }
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName})]
        });
        navigation.dispatch(resetAction);
    }
}



const StackOptions = (_navigation) => {
    let {goBack, getParam} = _navigation.navigation;
    const headerBackTitle = null;
    navigation = _navigation.navigation;
    // console.log(getParam('HiddenHeader'));
    if (getParam('HiddenHeader')) {
        return {header: null}
    }
    let headerLeft = (
        <TouchableOpacity onPress={() => {goBack()}}>
            <View style={styles.goBackBG}>
                <Image source={require('../../assets/back.png')}
                       style={styles.backImage}/>
            </View>
        </TouchableOpacity>
    );
    let headerTitleStyle: any = styles.headerTitleStyle;
    if (getParam('HiddenHeaderLeft')) {
        headerLeft = null;
        headerTitleStyle = styles.headerTitleStyleFirst
    }
    let headerStyle = styles.headerStyle;
    return {headerBackTitle,headerLeft,headerTitleStyle,headerStyle}
};


const styles = StyleSheet.create({
    headerTitleStyle: {
        alignSelf:'center',
        marginLeft: Platform.OS == 'ios' ? 14 : 14,
        color: Theme.colors.navigationTitleColor,
        fontSize: Theme.font.sizeSm
    },

    headerTitleStyleFirst: {
        alignSelf:'center',
        color: Theme.colors.navigationTitleColor
    },

    goBackBG: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerStyle:{
        backgroundColor: Theme.colors.navigationBackgroundColor
    },
    backImage: {
        height: 20,
        width: 20
    }

})



/**
 *   笔记
 *
 *   HiddenHeaderLeft   ----------    影藏左边的返回按钮
 *   HiddenHeader       ----------    隐藏头部栏
 *
 *
 *
 *
 *
 *
 * */