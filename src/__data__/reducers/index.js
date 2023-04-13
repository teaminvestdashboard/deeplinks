import { combineReducers } from 'redux'
import LinksReducer from './linksReducer'


const rootReducer = combineReducers({
    Links: LinksReducer,
});

export default rootReducer;
