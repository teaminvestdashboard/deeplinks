import {ADD_PLATFORM, RESET_DATA} from '../consts'

export const addPlatform = (value) => ({
    type: ADD_PLATFORM,
    data: value
})

export const resetData = () => ({
    type: RESET_DATA,
    data: null
})
