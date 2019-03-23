import * as React from 'react'
import { DeviceEventEmitter} from 'react-native'
import Toast from 'react-native-root-toast';

import ReactNavigationConfig from './react-navigation-config'
import {UiKitPropsTypes} from './uikit'


export default class App extends React.PureComponent {

    componentDidMount() {
        DeviceEventEmitter.addListener('app:toast', this.showToast)
    }

    render(){
        return(
          <ReactNavigationConfig/>
        )
    }

    showToast = ({ text, setting }) => {
        let _setting = setting ? setting as UiKitPropsTypes.ToastProps : {};
        let _position = Toast.positions.CENTER;
        if (_setting.position === 'TOP') {
            _position = Toast.positions.TOP;
        } else if (_setting.position === 'BOTTOM') {
            _position = Toast.positions.BOTTOM;
        }
        Toast.show(text, {
            // duration: _setting.duration === 'LONG' ? Toast.durations.LONG : Toast.durations.SHORT,
            duration: 400,
            visible: _setting.visible || false,
            position: _position,
            animation: _setting.animation || true,
            shadow: _setting.shadow || true,
            backgroundColor: _setting.backgroundColor || 'rgba(0,0,0,0.8)',
            shadowColor: _setting.shadowColor || null,
            textColor: _setting.textColor || null,
            delay: _setting.delay || 0,
            hideOnPress: _setting.hideOnPress || true,
            onShow: () => {
                _setting.onShow && _setting.onShow();
            },
            onShown: () => {
                _setting.onShown && _setting.onShown();
            },
            onHide: () => {
                _setting.onHide && _setting.onHide();
            },
            onHidden: () => {
                _setting.onHidden && _setting.onHidden();
            }
        });
    };

}