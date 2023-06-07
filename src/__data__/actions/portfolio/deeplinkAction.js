import {ADD_DEEPLINK, ADD_DEEPLINK_TYPE} from '../../consts'

export const addDeeplink = (value) => ({
    type: ADD_DEEPLINK,
    data: value
})

export const addDeeplinkType = (value) => ({
    type: ADD_DEEPLINK_TYPE,
    data: value
})
