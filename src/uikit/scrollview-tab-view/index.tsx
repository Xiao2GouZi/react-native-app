
import * as React from "react";
import {
    ViewStyle,
    View,
} from 'react-native'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import {ScrollViewTabViewProps, ScrollViewTabViewTabBarType} from '../types'
import Theme from '../theme'


export default class ScrollViewTabView extends React.PureComponent<ScrollViewTabViewProps, any> {

    static defaultProps = {
        tabBarPosition: 'top',
        locked: false,   //true 不可滑动
        initialPage: 0,  //初始化tab
        tabBarUnderlineStyle: {
            backgroundColor: Theme.colors.brandPrimary
        },
        tabBarBackgroundColor: Theme.colors.backgroundColor,
        tabBarActiveTextColor: Theme.colors.brandPrimary,
        tabBarInactiveTextColor: Theme.colors.textBase,
        tabBarTextStyle: {
            // color: Theme.colors.textBase,
            fontSize: Theme.font.sizeCaption
        },
        style: {
            flex: 1,
        },
        scrollWithoutAnimation: false,
        tabBarType: ScrollViewTabViewTabBarType.ScrollTabBar,
        tabBarTypeCustom: () =>  <ScrollableTabBar/>
    };

    render() {


        let {children,
            tabBarPosition,
            onChangeTab,
            onScroll,
            locked,
            initialPage,
            page,
            tabBarUnderlineStyle,
            tabBarBackgroundColor,
            tabBarInactiveTextColor,
            tabBarActiveTextColor,
            tabBarTextStyle,
            style,
            scrollWithoutAnimation,
            tabBarType,
            tabBarTypeCustom
        } = this.props;
        let renderTabBar: () => void;
        if (tabBarType === ScrollViewTabViewTabBarType.Default) {
            renderTabBar = () => {
                return (
                    <DefaultTabBar/>
                )
            }
        }else if (tabBarType === ScrollViewTabViewTabBarType.ScrollTabBar) {
            renderTabBar = () =>  {
                return (
                    <ScrollableTabBar/>
                )
            }
        }else {
            renderTabBar = tabBarTypeCustom
        }
        return(
            <View style={{flex: 1} as ViewStyle}>
                <ScrollableTabView renderTabBar={renderTabBar}
                                   tabBarPosition={tabBarPosition}
                                   onChangeTab={(item) => onChangeTab && onChangeTab(item)}
                                   onScroll={onScroll}
                                   locked={locked}
                                   initialPage={initialPage}
                                   page={page}
                                   tabBarUnderlineStyle={tabBarUnderlineStyle}
                                   tabBarBackgroundColor={tabBarBackgroundColor}
                                   tabBarActiveTextColor={tabBarActiveTextColor}
                                   tabBarInactiveTextColor={tabBarInactiveTextColor}
                                   tabBarTextStyle={tabBarTextStyle}
                                   style={style}
                                   scrollWithoutAnimation={scrollWithoutAnimation}>
                    {children}
                </ScrollableTabView>

            </View>
        )

    }






}



