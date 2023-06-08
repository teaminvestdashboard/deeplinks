import { combineReducers } from 'redux'
import InvestmentsReducer from './investments'
import LinksReducer from './portfolio/linksReducer'


const rootReducer = combineReducers({
    Links: LinksReducer,
    investments: InvestmentsReducer,
});

export default rootReducer;
