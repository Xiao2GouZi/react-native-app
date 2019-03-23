import {DeviceEventEmitter} from 'react-native'

interface IToastProps {
    duration?: 'LONG' | 'SHORT';
    visible?: boolean;
    position?: 'TOP' | 'BOTTOM' | 'CENTER';
    animation?: boolean;
    shadow?: boolean;
    backgroundColor?: string,
    shadowColor?: string,
    textColor?: string,
    delay?: number,
    hideOnPress?: boolean;
    onShow?: () => void;
    onShown?: () => void;
    onHide?: () => void;
    onHidden?: () => void;
}

class Toast {
    static show = (text: string, setting?: IToastProps) => {
        DeviceEventEmitter.emit("app:toast", {text, setting});
    }
}

export default Toast;