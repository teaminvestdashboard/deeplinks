import { InitialStateInvestments } from '../../initialState'
import {
    ADD_DEEPLINK, ADD_DEEPLINK_TYPE,
    ADD_PLATFORM,
    ADD_SCREEN,
    ADD_LINK,
    RESET_DATA,
    ADD_VERSION,
    ADD_SOURCE_TYPE,
    ADD_SOURCE,
    ADD_PLATFORM_NAME
} from '../../consts'


const InvestmentsReducer = (state = InitialStateInvestments, action) => {
    switch (action.type) {
        case ADD_PLATFORM:
            return {
                ...state,
                ...InitialStateInvestments,
                platform: action.data,
            }
        case ADD_PLATFORM_NAME:
            return {
                ...state,
                platformName: action.data,
            }
        case ADD_VERSION:
            return {
                ...state,
                version: action.data,
                deeplink: "",
                deeplinkType: "",
                screen: "",
                source: "",
                sourceType: ""
            }
        case ADD_DEEPLINK:
            return {
                ...state,
                deeplink: action.data,
                screen: "",
                source: "",
                sourceType: ""
            }
        case ADD_SCREEN:
            return {
                ...state,
                screen: action.data,
                source: "",
                sourceType: ""
            }
        case ADD_SOURCE_TYPE:
            return {
                ...state,
                sourceType: action.data,
                source: ""
            }
        case ADD_SOURCE:
            return {
                ...state,
                source: action.data,
            }
        case ADD_DEEPLINK_TYPE:
            return {
                ...state,
                deeplinkType: action.data
            }
        case ADD_LINK:
            return {
                ...state,
                link: action.data
            }
        case RESET_DATA:
            return {
                ...InitialStateInvestments,
            }
        default:
            return state
    }
};

export default InvestmentsReducer;
