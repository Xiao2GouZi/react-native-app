
import {ToastProps} from '../types'
import {DeviceEventEmitter} from 'react-native'

class Toast {
    static show = (text: string, setting?: ToastProps) => {
        DeviceEventEmitter.emit("app:toast", {text, setting});
    }
}

export default Toast;