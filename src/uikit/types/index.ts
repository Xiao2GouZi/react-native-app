
export interface ToastProps {
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


export interface SwiperProps {
    autoPlay?: boolean,
    dotStyle?: Object | Array<Object>,
    activeDotStyle?: Object | Array<Object>,
    paginationStyle?: Object | Array<Object>,
    style?: Object | Array<Object>,
    height?: number,
    width?: number,
    imageData?: Array<ImageData>,
    onPress?: (e?: any) => void;
    borderRadius?: number
}

interface ImageData {
    url: string,
    id: number | string
}


export interface ScrollViewTabViewProps {
    children?: any,
    // renderTabBar?: () => void,
    tabBarPosition?: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom',   //位置
    onChangeTab?: (e?: any) => void,
    onScroll?: (e?: number) => void,
    locked?: boolean,
    initialPage?: number,
    page?: number,
    tabBarUnderlineStyle?: Object | Array<Object>,
    tabBarBackgroundColor?: string,
    tabBarActiveTextColor?: string,
    tabBarInactiveTextColor?: string,
    tabBarTextStyle?: Object | Array<Object>,
    style?: Object | Array<Object>,
    scrollWithoutAnimation?: boolean,
    tabBarType?: ScrollViewTabViewTabBarType,
    tabBarTypeCustom?: () => void    //自定义tabbar
}

export enum ScrollViewTabViewTabBarType {
    Default = 'Default',
    ScrollTabBar = 'ScrollTabBar',
    CustomScrollTabBar = 'CustomScrollTabBar'
}


export interface NetWorkImage {
    source: string,
    errorSrc?: string,
    width?: number,
    height?: number,
    onError?: (e?: any) => void,
    onLoad?: (e?: any) => void,
    style?: Object | Array<Object>,
    children?: any,
}


export interface CustomNavigationPros {
    backgroundStyle?: Object | Array<Object>,
    leftView?: any,
    leftStyle?: Object | Array<Object>,
    hiddenLeft?: boolean,
    rightView?: any,
    rightStyle?: Object | Array<Object>,
    title?: string,
    titleStyle?: Object | Array<Object>,
    leftOnPress?: () => void,
    leftIconColor?: string,
    rightOnPress?: () => void,
}

export interface AppRoute {
    screen: object,
    initialRouteName: string,
    initialRouteParams?: object
}

export interface NavigationBase {
    routeName: string,
    params?: any
}

export interface NavigationAction extends NavigationBase {
    action?: any
}

export interface NavigationPopParams {
    route?: number
}

export interface NavigationDispatchBackParams {
    key? :string
}

export interface NavigationDispatchSetParam {
    params: any,
    key: string
}

export interface NavigationDispatchNavigateParams {
    routeName: string,
    params?: any,
    key?: string,
    action?: any
}





