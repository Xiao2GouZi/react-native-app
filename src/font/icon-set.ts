import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from './iconfont.json';



const IconSet = createIconSet(glyphMap, 'IconFont', 'iconfont.ttf');

export default IconSet;

export const Button = IconSet.Button;
export const TabBarItem = IconSet.TabBarItem;
export const TabBarItemIOS = IconSet.TabBarItemIOS;
export const ToolbarAndroid = IconSet.ToolbarAndroid;
export const getImageSource = IconSet.getImageSource;