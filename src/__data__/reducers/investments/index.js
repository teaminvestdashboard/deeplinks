import { InitialStateInvestments } from '../../initialState'
import {
    ADD_DEEPLINK_INVEST, ADD_DEEPLINK_TYPE_INVEST,
    ADD_PLATFORM_INVEST,
    ADD_SCREEN_INVEST,
    ADD_LINK_INVEST,
    RESET_DATA_INVEST,
    ADD_VERSION_INVEST,
    ADD_SOURCE_TYPE_INVEST,
    ADD_SOURCE_INVEST,
    ADD_PLATFORM_NAME_INVEST
} from '../../consts'


const InvestmentsReducer = (state = InitialStateInvestments, action) => {
    switch (action.type) {
        case ADD_PLATFORM_INVEST:
            return {
                ...state,
                ...InitialStateInvestments,
                platform: action.data,
            }
        case ADD_PLATFORM_NAME_INVEST:
            return {
                ...state,
                platformName: action.data,
            }
        case ADD_VERSION_INVEST:
            return {
                ...state,
                version: action.data,
                deeplink: "",
                deeplinkType: "",
                screen: "",
                source: "",
                sourceType: ""
            }
        case ADD_DEEPLINK_INVEST:
            return {
                ...state,
                deeplink: action.data,
                screen: "",
                source: "",
                sourceType: ""
            }
        case ADD_SCREEN_INVEST:
            return {
                ...state,
                screen: action.data,
                source: "",
                sourceType: ""
            }
        case ADD_SOURCE_TYPE_INVEST:
            return {
                ...state,
                sourceType: action.data,
                source: ""
            }
        case ADD_SOURCE_INVEST:
            return {
                ...state,
                source: action.data,
            }
        case ADD_DEEPLINK_TYPE_INVEST:
            return {
                ...state,
                deeplinkType: action.data
            }
        case ADD_LINK_INVEST:
            return {
                ...state,
                link: action.data
            }
        case RESET_DATA_INVEST:
            return {
                ...InitialStateInvestments,
            }
        default:
            return state
    }
};

export default InvestmentsReducer;
