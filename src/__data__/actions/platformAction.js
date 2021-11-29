import {ADD_PLATFORM, WEB_ACTIVE} from "../consts";

export const addPlatform = (value) => ({
    type: ADD_PLATFORM,
    data: value
})

export const webPlatform = () => ({
    type: WEB_ACTIVE,
    data: true
})