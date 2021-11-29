import {InitialState} from "../initialState";
import {ADD_EXTERNAL_SOURCE, ADD_INTERNAL_SOURCE, ADD_PLATFORM, ADD_SCREEN, ADD_TARGET, WEB_ACTIVE} from "../consts";


const LinksReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_PLATFORM :
            return {
                ...state,
                platform: action.data,
                web: false
            }
        case ADD_TARGET :
            return {
                ...state,
                target: action.data
            }
        case ADD_SCREEN :
            return {
                ...state,
                screen: action.data
            }
        case ADD_INTERNAL_SOURCE :
            return {
                ...state,
                internalSource: action.data
            }
        case ADD_EXTERNAL_SOURCE :
            return {
                ...state,
                externalSource: action.data
            }
        case WEB_ACTIVE :
            return {
                ...state,
                web: action.data
            }
        default:
            return state
    }
};

export default LinksReducer;