
import React from 'react'
import {StyleSheet, View, Text, ViewStyle, TextStyle, TouchableOpacity, Image, ImageStyle} from 'react-native'
import {CustomNavigationPros} from '../types'
import Theme from '../theme'
import ScreenPixel from '../screen-pixel'
import Config from '../../config'





export default class CustomNavigation extends React.PureComponent<CustomNavigationPros, any> {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    static defaultProps = {
        backgroundStyle: {},
        titleStyle: {},
        hiddenLeft: false
        // leftIconColor: Theme.colors.navigationBackIconColor
    };



    componentDidMount() {

    }

    render() {

        let {title , titleStyle, backgroundStyle} = this.props


        return (
            <View style={[styles.contain, backgroundStyle]}>
                {this.renderLeftView()}
                <View style={styles.titleBg}>
                    {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
                </View>
                {this.renderRightView()}
            </View>
        )
    }


    renderLeftView = () => {
        let {leftOnPress} = this.props;
        if (leftOnPress) {
            return (
                <TouchableOpacity onPress={leftOnPress}
                                  style={styles.leftViewContent}>
                    {this.renderLeftContent()}
                </TouchableOpacity>
            )
        }else  {
            return this.renderLeftContent()
        }
    };


    renderLeftContent = () => {
        let {leftView, hiddenLeft} = this.props;
        if (leftView) {
            return (
                <View style={styles.leftViewContent}>
                    {leftView}
                </View>
            )
        }else if (!hiddenLeft) {
            return (
                <View style={styles.leftViewContent}>
                    <Image source={require('../../assets/back.png')}
                           style={styles.backImage}/>
                </View>
            )
        } else {
            return null
        }
    }

    renderRightView = () => {
        let {rightOnPress} = this.props;
        if (rightOnPress) {
            return (
                <TouchableOpacity onPress={rightOnPress}
                                  style={styles.rightViewContent}>
                    {this.renderRightContent()}
                </TouchableOpacity>
            )
        }else {
            return this.renderRightContent()
        }
    };

    renderRightContent = () => {
        let {rightView} = this.props;
        if (rightView) {
            return (
                <View style={styles.rightViewContent}>
                    {rightView}
                </View>
            )
        }else {
            return null
        }
    }



}



const styles = StyleSheet.create({

    contain: {
        marginTop: Config.isIOS ? (Config.isAllScreen ? 44 : 20) : 0,
        backgroundColor: '#fff',
        height: 44,
        width: Theme.values.deviceWidth,
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,

    titleBg: {
        width: ScreenPixel.scaleSize(560),
        // backgroundColor: 'blue',
        height: 44,
        alignItems: "center",
        justifyContent: "center"
    } as ViewStyle,

    title: {
        fontSize: ScreenPixel.scaleSize(32),
        fontWeight: 'bold'
    } as TextStyle,

    leftViewContent: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        // backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center"
    } as ViewStyle,

    rightViewContent: {
        position: "absolute",
        right: 0,
        top: 0,
        width: 44,
        height: 44,
        // backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center"
    } as ViewStyle,

    backImage: {
        height: 20,
        width: 20
    } as ImageStyle





});

