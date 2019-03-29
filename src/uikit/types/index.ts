import {NavigationStackScreenOptions, NavigationScreenProps} from 'react-navigation'


interface ToastProps {
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


export {
    NavigationStackScreenOptions,
    NavigationScreenProps,
    ToastProps
}


/**
 *   NavigationStackScreenOptions, NavigationScreenProps    使用方式
 *    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Kits',
      };
 *
 static navigationOptions = (item: NavigationScreenProps) =>  {
        let {navigation: {getParam}} = item;
        return {
            title: getParam('name') || '',
        }
      };
 * */





