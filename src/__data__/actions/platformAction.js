import {ADD_PLATFORM, RESET_DATA, WEB_ACTIVE} from "../consts";

export const addPlatform = (value) => ({
    type: ADD_PLATFORM,
    data: value
})

export const webPlatform = () => ({
    type: WEB_ACTIVE,
    data: true
})

export const resetData = (value) => ({
    type: RESET_DATA,
    data: value
})