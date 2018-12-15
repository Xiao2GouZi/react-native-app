
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import rootReducers from './reducers';
import * as Immutable from 'immutable';
import {createLogger} from 'redux-logger'  // 日志
import thunk from 'redux-thunk';   // 异步
import { batchStoreEnhancer, batchMiddleware } from './middleware/redux-batch-enhancer'   // 通知发送多个dispatch
import { dataTransformMiddleware } from './middleware/null-string'

const store = () => {
    const middleware = [] as any[];   // 中间件集合
    middleware.push(thunk);   // 异步
    middleware.push(batchMiddleware);
    middleware.push(dataTransformMiddleware);
    /**
     *  日志
     */
    const stateTransformer = (state: any) => {       // 是将Immutable的转成可读
        const newState = {};
        for (const i of Object.keys(state)) {
            newState[i] = Immutable.isImmutable(state[i]) ? state[i].toJS() : state[i]
        }
        return newState;
    };
    const loggerMiddleware = createLogger({
        collapsed: true,
        diff: true,
        stateTransformer
    });
    middleware.push(loggerMiddleware);
    return createStore(
        combineReducers({
            ...rootReducers,
        }),
        compose(
            applyMiddleware(...middleware),
            batchStoreEnhancer,
        )
    );
};
export default store;