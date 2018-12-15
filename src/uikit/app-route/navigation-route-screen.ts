import { DeviceEventEmitter } from "react-native";
import {NavigationBase, NavigationAction, NavigationPopParams, NavigationDispatchBackParams, NavigationDispatchSetParam, NavigationDispatchNavigateParams} from '../types'

function navigationNavigate(params: NavigationBase) {
    DeviceEventEmitter.emit('route:navigate', params);
}

function navigationPush(params: NavigationAction){
    DeviceEventEmitter.emit('route:push', params);
}

function navigationGoBack(){
    DeviceEventEmitter.emit('route:goBack', {});
}

/**
 *  返回的指定的路由
 *  route  可以不填,默认返回上一层, 如果是2,就是返回上两层....
 * */
function navigationPop(param: NavigationPopParams) {
    DeviceEventEmitter.emit('route:pop', param.route)
}


function navigationPopTopTop() {
    DeviceEventEmitter.emit('route:popToTop')
}

function navigationReplace(params: NavigationBase){
    DeviceEventEmitter.emit('route:replace', params)
}


function navigationDispatchBack(params: NavigationDispatchBackParams) {
    DeviceEventEmitter.emit('route:dispatchBack', params)
}

function navigationDispatchInit() {
    DeviceEventEmitter.emit('route:dispatchInit')
}

function navigationDispatchSetParam(params: NavigationDispatchSetParam) {
    DeviceEventEmitter.emit('route:dispatchSetParam', params)
}

function navigationDispatchNavigate(params: NavigationDispatchNavigateParams) {
    DeviceEventEmitter.emit('route:dispatchNavigate', params)
}













// willBlur - the screen will be unfocused
// willFocus - the screen will focus
// didFocus - the screen focused (if there was a transition, the transition completed)
// didBlur - the screen unfocused (if there was a transition, the transition completed)





export default {
    navigationNavigate,
    navigationPush,
    navigationGoBack,
    navigationPop,
    navigationPopTopTop,
    navigationReplace,
    navigationDispatchBack,
    navigationDispatchInit,
    navigationDispatchSetParam,
    navigationDispatchNavigate
}