import * as React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ViewStyle } from 'react-native'
import {NavigationAction, Theme, UiKitTypes, IconEx} from '../../uikit'
import DataList from './data'


export default class Me extends React.PureComponent<any, any> {

    static navigationOptions: UiKitTypes.NavigationStackScreenOptions = {
        title: 'Kits',
    };

    componentDidMount() {
        console.log('------  data list', DataList)
    }

    render(){
        return(
            <View style={styles.contain}>
                <IconEx name='dianpu' size={40} color='#226688'/>
                <FlatList data={DataList}
                          renderItem={this.renderItem}/>
            </View>
        )
    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.listItem} onPress={() => this.toDetail(item)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    };


    toDetail = ({screen, name}: {screen: string, name: string}) => {
        NavigationAction.NavigationPush(screen, {name})
    }

}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
    } as ViewStyle,

    listItem: {
        backgroundColor: '#fff',
        height: 44,
        borderBottomColor: Theme.border.color,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle
})

