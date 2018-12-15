/**
 * 网络图片组件组件
 * Image.prefetch 缓存图片到disk;
 * Android会转格式为webp
 * ios不支持webp使用jpg格式;
 *    source, width, height必填;
 *
 *    <QMNetworkImage source={} width={} height={}/>
 */
import React from "react";
import { Image, Platform } from "react-native";
import { fromJS, is } from "immutable";
import { NetWorkImage } from '../types'
/**
 * @see http://stackoverflow.com/questions/5573096/detecting-webp-support
 */
export default class NetworkImage extends React.PureComponent<NetWorkImage, any>  {
    /**
     * 声明类型;
     */
    static defaultProps = {
        source: undefined,
        alt: "图片加载中",
        errorSrc: "", // 读取不到的话, 显示的地址
        width: 100, // 剪切高度 必填啊
        height: 100, // 剪切宽度 必填啊
        // onError: () => { },
        // onLoad: () => { }
    };

    constructor(props) {
        super(props);
        this.state = {
            source: props.source
        };
    }

    /**
     * When the image changes on Android, verify the image.
     *
     * @param  {Object} nextProps The next incoming properties.
     * @return {void}
     */
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.source &&
            nextProps.source &&
            (!this.props.source ||
                this.props.source !== nextProps.source ||
                this.props.width != nextProps.width ||
                this.props.height != nextProps.height) &&
            Platform.OS === "android" &&
            nextProps.onError
        ) {
            this.verifyImage();
        }

        // android 必须使用在这里设置source, 其它地主没有办法把props塞给state
        this.setState({ source: nextProps.source });
    }

    /**
     * 主要判断source, width, height, style
     * @param nextProps
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            is(fromJS(this.props), fromJS(nextProps)) &&
            is(fromJS(this.state), fromJS(nextState))
        );
    }

    /**
     * When the component will mount, verify the image on Android.
     * @return {void}
     */
    componentWillMount() {
        if (Platform.OS === "android" && this.props.onError && this.props.source) {
            this.verifyImage();
        }
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        let props = this.props,
            state = this.state;
        return (
            <Image source={{ uri: state.source.indexOf("square") == -1 ? this._wrapUrl(state.source) : state.source }}
                   onError={this._onError}
                   onLoad={this._onLoad}
                   style={props.style}>
                {props.children ? props.children : null}
            </Image>
        );
    }

    _onLoad = () => {
        if (this.props.onLoad) {
            this.props.onLoad()
        }
    };


    /**
     *
     * @private
     */
    _onError = () => {
        console.log("_onError", this.props, this.state);
        if (this.props.onError) {
            this.props.onError();
        }
        this.setState({ source: Platform.OS == 'ios' ? 'square' : 'asset:/square.png' });
    };

    /**
     * 包装地址
     * @param source
     * @private
     */
    _wrapUrl = source => {
        let props = this.props;
        return this._getWebp(source, props.width, props.height);
    };

    /**
     * 转webp格式, ios转jpg, ios不支持webp
     * @param source
     * @private
     */
    _getWebp(source, width, height) {
        let cleanSrc = this._cleanUrl(source);
        //__DEV__ && console.log('_getWebp:cleanSrc=', cleanSrc);
        let newUrl = source;
        if (Platform.OS === "android") {
            newUrl = this._format(cleanSrc, parseInt(width), parseInt(height), "webp");
        } else if (Platform.OS === "ios") {
            newUrl = this._format(cleanSrc, parseInt(width), parseInt(height), "jpg");
        }
        //__DEV__ && console.log('_getWebp:newUrl=', newUrl);
        return newUrl;
    }

    /**
     * 添除服务端的格式转换;
     * @param source
     * @returns {*}
     * @private
     */
    _cleanUrl(source) {
        source = source || "";
        let p = source.lastIndexOf("@");
        if (p != -1) {
            return source.substring(0, p);
        }
        return source;
    }

    //格式化策略
    //例如: oss策略为 x-oss-process=image/resize,m_fixed,h_100,w_100/format,jpg
    _format(src, width, height, format) {
        var f = [src, "?x-oss-process=image"];
        if (width || height) {
            f.push("/resize,m_fixed,");
            if (width) {
                f.push(`,w_${width}`);
            }
            if (height) {
                f.push(`,h_${height}`);
            }
        }
        if (format) {
            f.push(`/format,${format}`);
        }
        return f.join("");
    }
    /**
     * `Image.prefetch` is used to load the image and `catch` the failure.
     * Android's `Image` `onError` callback does not get invoked if the remote image fails to load with a `404`.
     * Prefetch, however, will reject the promise if it fails to load, allowing us to detect failures to
     * provide better fallback support.
     *
     * Android only.
     * https://github.com/facebook/react-native/issues/7440
     *
     * @return {void}
     */
    verifyImage = () => {
        let { source, width, height } = this.props;
        Image.prefetch(this._getWebp(source, width, height)).catch(e =>
            this.props.onError(e)
        );
    };
}
