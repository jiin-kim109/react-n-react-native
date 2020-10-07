import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducerEnhancer'
import rootReducer from './reducers';
import rootSaga from "./sagas"

function configureStore(preloadedState?) {
    const sagaMiddleWare = createSagaMiddleware()
    const middlewares = [sagaMiddleWare, logger]
    /*
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(secretMiddleware)
    }
    if (process.env == 'web')
        middlewares.push(monitorReducerEnhancer)
    */
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers: any = compose(...enhancers)
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    sagaMiddleWare.run(rootSaga);
  
    return store
}

export const store = configureStore()