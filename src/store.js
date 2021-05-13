import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {};
//const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
console.log(initialState)
const store = createStore(
    rootReducer,
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
        )
);

store.subscribe(()=>{console.log("store is updated",store.getState())})

export default store;