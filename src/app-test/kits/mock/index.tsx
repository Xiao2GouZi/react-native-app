

import * as React from 'react'
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native'
import { UiKitTypes } from '../../../uikit';
import { Fetch } from '../../../common';

export default class KitMock extends React.PureComponent<any, any> {

    static navigationOptions = (item: UiKitTypes.NavigationScreenProps) =>  {
        let {navigation: {getParam}} = item;
        return {
            title: getParam('name') || '',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }



    render(){
        let { text } = this.state;
        return(
            <View style={styles.contain}>
                <Text>先运行 yarn mock</Text>
                <TouchableOpacity onPress={this.getUserInfo}
                                  style={styles.btn}>
                    <Text> 获取用户信息</Text>
                </TouchableOpacity>

                <Text>{text}</Text>
            </View>
        )
    }


    getUserInfo = async () => {
        console.log('----- a')
        let response = await Fetch.Get({url: 'http://127.0.0.1:8090/userInfo'})
            .catch(err => {
                console.log(' --- fetch err', err)
            });
        this.setState({
            text: JSON.stringify(response)
        })
        console.log(' --- fetch res', response)

    }

}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,

    btn: {
        width: 120,
        height: 44,
        backgroundColor: "#fff",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 44,
        marginTop: 44
    } as ViewStyle
});