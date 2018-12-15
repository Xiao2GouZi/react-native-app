
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';   // 异步
import { batchStoreEnhancer, batchMiddleware } from './middleware/redux-batch-enhancer';  // 通知发送多个dispatch
import { dataTransformMiddleware } from './middleware/null-string';

const store = () => {
    const middleware = [] as any[];   // 中间件集合
    middleware.push(thunk);   // 异步
    middleware.push(batchMiddleware);
    middleware.push(dataTransformMiddleware);
    return createStore(
        combineReducers({
            ...rootReducers,
        }),
        compose(
            applyMiddleware(...middleware),
            batchStoreEnhancer
        )
    );
};


export default store;