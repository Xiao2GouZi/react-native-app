import {DeviceEventEmitter} from 'react-native'
import { NavigationNavigateAction } from 'react-navigation';

export default {


    NavigationPush: function (route: string, params: any) {
        DeviceEventEmitter.emit('NavigationPush', {route, params})
    },

    NavigationPop: function (n: number = 1, immediate: boolean = true) {
        DeviceEventEmitter.emit('NavigationPop', {n, immediate})
    },

    NavigationPopToTop: function (key: string = null, immediate: boolean = true) {
        DeviceEventEmitter.emit('NavigationPopToTop', {key, immediate})
    },

    NavigationReplace: function (routeName: string, params: any) {
        DeviceEventEmitter.emit('NavigationReplace', {routeName, params})
    },

    NavigationReset: function (index: number, actions: NavigationNavigateAction[]) {
        DeviceEventEmitter.emit('NavigationReset', {index, actions})

    },

    NavigationNavigate: function (routeName: string, params: any = {}) {
        DeviceEventEmitter.emit('NavigationNavigate', {routeName, params})

    },

    NavigationBack: function (key?: string | null) {
        DeviceEventEmitter.emit('NavigationBack', {key})

    }

}


