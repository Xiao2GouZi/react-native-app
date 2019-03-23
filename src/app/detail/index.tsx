import * as React from 'react'
import { View, Text} from 'react-native'

export default class Detail extends React.PureComponent {

    static navigationOptions = {
        title: 'Detail',
    };

    render(){
        return(
            <View>
                <Text>Detail的世界</Text>
            </View>
        )
    }

}