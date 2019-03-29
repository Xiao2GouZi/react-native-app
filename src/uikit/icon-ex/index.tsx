import * as React from 'react'
import {TouchableOpacity} from 'react-native'
import IconSet from '../../font/icon-set'

interface IProps {
    name: string,
    size?: number,
    color?: string,
    onClick?: () => void
}


export default class IconEx extends React.PureComponent<IProps>{

    static  defaultProps = {
        size: 30,
        color: '#eee'
    }

    render(){
        let {size, color, onClick, name} = this.props
        if (onClick) {
            return(
                <TouchableOpacity onPress={onClick}>
                    <IconSet name={name} size={size} color={color}/>
                </TouchableOpacity>
            )
        } else  {
            return(
                <IconSet name={name} size={size} color={color}/>
            )
        }
    }

}