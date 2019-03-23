import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationAction } from '../../uikit';

export default class Me extends React.PureComponent<any, any> {

    static navigationOptions = {
        title: 'UI',
    };

    componentDidMount() {
        // NavigationAction.TabBarOnPress((param) => {
        //     console.log(' ---- tab on press param', param)
        // })
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.toDetail}>
                    <Text>UI的世界</Text>

                </TouchableOpacity>
            </View>
        )
    }

    toDetail = () => {
        NavigationAction.NavigationPush('DetailScreen', {name: '小明'})

    }

}