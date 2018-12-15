
import * as React from "react";
import {
    ViewStyle,
    View,
    ImageStyle,
    Image,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import {SwiperProps} from '../types'
import PixelRatio from '../screen-pixel'
import Theme from '../theme'

export default class AdSwiper extends React.PureComponent<SwiperProps, any> {

    static defaultProps = {
        autoPlay: true,
        dotStyle: {
            backgroundColor:Theme.colors.backgroundColor,
            width: 6,
            height: 6
        } ,
        activeDotStyle: {
            backgroundColor:Theme.colors.brandPrimary,
            width: 6,
            height: 6
        },
        paginationStyle: {
            bottom: 10
        },
        height: PixelRatio.scaleSize(400),
        width: Theme.values.deviceWidth,
        borderRadius: 0
    };


    render() {
        let {autoPlay, activeDotStyle, dotStyle, paginationStyle, height, width, imageData} = this.props;
        return(
            <View style={{width: width, height: height}}>
                <Swiper autoplay={autoPlay}
                        key={imageData.length}
                        removeClippedSubviews={false}
                        dotStyle={dotStyle as ViewStyle}
                        activeDotStyle={activeDotStyle as ViewStyle}
                        paginationStyle={paginationStyle as ViewStyle}>
                    {this.renderSwiperItem()}
                </Swiper>
            </View>
        )

    }

    renderSwiperItem = () => {
        let {height, width, imageData, onPress, borderRadius} = this.props;
        return imageData.map((item, index) => {
            return(
                <View key={index}>
                    {
                        onPress?  <TouchableOpacity onPress={() => onPress(item.id)}>
                                <Image style={{
                                    width: width,
                                    height: height,
                                    borderRadius: borderRadius
                                } as ImageStyle} source={{uri: item.url}}>
                                </Image>
                            </TouchableOpacity> :
                            <Image style={{
                                width: width,
                                height: height,
                                borderRadius: borderRadius
                            } as ImageStyle}
                                   source={{uri: item.url}}>
                            </Image>
                    }
                </View>
            )
        })
    }
}



