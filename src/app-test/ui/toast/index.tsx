import * as React from  'react'
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { UiKitTypes , Theme, Toast} from '../../../uikit';



export default class ShowToast extends React.PureComponent {

    static navigationOptions: UiKitTypes.NavigationStackScreenOptions = {
        title: 'Toast',
    };

    render(){
        return(
            <View style={styles.contain}>


                <TouchableOpacity onPress={this.onMiddle} >
                    <Text style={styles.button}>middle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onBottom} >
                    <Text style={styles.button}>bottom</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onTop}>
                    <Text style={styles.button}>top</Text>
                </TouchableOpacity>

            </View>
        )
    }

    onBottom = () => {
        Toast.show('show toast', {position: 'BOTTOM'})
    };

    onMiddle = () => {
        Toast.show('show toast', {position: 'CENTER'})
    };

    onTop = () => {
        Toast.show('show toast', {position: 'TOP'})
    };

    time = () => {
        Toast.show('show toast', {position: 'TOP', duration: 'LONG'})
    }



}

const styles = StyleSheet.create({

    contain: {
        flex: 1,
        backgroundColor: Theme.colors.backgroundColor,
        justifyContent: "center",
        alignItems: 'center'
    } as ViewStyle,

    button: {
        width: 100,
        height: 44,
        marginTop: 20,
        borderColor: Theme.border.color,
        borderWidth: 1,
        borderRadius: 6,
        textAlign: 'center',
        lineHeight: 42
    } as ViewStyle

})