import {InitialState} from '../../initialState'
import {
    ADD_DEEPLINK, ADD_DEEPLINK_TYPE,
    ADD_EXTERNAL_SOURCE,
    ADD_INTERNAL_SOURCE,
    ADD_PLATFORM,
    ADD_SCREEN,
    ADD_LINK,
    RESET_DATA
} from '../../consts'


const LinksReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_PLATFORM :
            return {
                ...state,
                platform: action.data,
            }
        case ADD_DEEPLINK :
            return {
                ...state,
                deeplink: action.data,
                screen: "",
            }
        case ADD_SCREEN :
            return {
                ...state,
                screen: action.data
            }
        case ADD_INTERNAL_SOURCE :
            return {
                ...state,
                internalSource: action.data,
                externalSource: ""
            }
        case ADD_EXTERNAL_SOURCE :
            return {
                ...state,
                externalSource: action.data,
                internalSource: ""
            }
        case ADD_DEEPLINK_TYPE :
            return {
                ...state,
                deeplinkType: action.data
            }
        case ADD_LINK :
            return {
                ...state,
                link: action.data
            }
        case RESET_DATA:
            return {
                ...InitialState,
            }
        default:
            return state
    }
};

export default LinksReducer;
