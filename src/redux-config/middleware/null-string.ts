import * as TSTypes from '../../types'
import { Utils } from '../../common'


/**
 *  过滤数据中所有的null, undefined
 */
export const dataTransformMiddleware = () => {
    return (next: any) => {
        return (action: TSTypes.IReduxAction) => {
            action.payload = Utils.dataNoNull(action.payload);
            return next(action);
        }
    }
};












