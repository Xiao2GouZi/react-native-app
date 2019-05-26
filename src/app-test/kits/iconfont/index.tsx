

import * as React from 'react'
import { View, StyleSheet, ViewStyle, WebView, Text} from 'react-native'
import { UiKitTypes } from '../../../uikit';

export default class KitIconFont extends React.PureComponent<any, any> {

    static navigationOptions = (item: UiKitTypes.NavigationScreenProps) =>  {
        let {navigation: {getParam}} = item;
        return {
            title: getParam('name') || '',
        }
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render(){
        return(
            <View style={styles.contain}>
                <Text>请先执行 yarn iconfont</Text>
                <WebView source={{uri: 'http://127.0.0.1:9000/'}}
                         style={styles.webView}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: '#fff'
    } as ViewStyle,


    webView:{
        flex: 1,
    } as ViewStyle
});