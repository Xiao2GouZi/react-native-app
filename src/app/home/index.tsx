import * as React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import {NavigationAction} from '../../uikit'

export default class Home extends React.PureComponent<any, any> {

    static navigationOptions = {
        headerTitle: 'Home'

    };

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.toDetail}>
                    <Text>Home的世界</Text>
                </TouchableOpacity>
            </View>
        )
    }

    toDetail = () => {
        NavigationAction.NavigationPush('DetailScreen', {name: '小明'})
    }

}