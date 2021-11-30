import {ADD_DEEPLINK} from "../consts";

export const addDeeplink = (value) => ({
    type: ADD_DEEPLINK,
    data: value
})