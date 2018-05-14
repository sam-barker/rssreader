import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from './reducer'

/**
 * Create redux store
 */
export default createStore(Reducer, applyMiddleware(thunkMiddleware))
