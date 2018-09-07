import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';

const rootReducer = combineReducers({
    catReducer,
    dogReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;