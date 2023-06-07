import { ADD_PLATFORM_NAME_INVEST, ADD_PLATFORM_INVEST, RESET_DATA_INVEST } from '../../consts'

export const addPlatformNameInvest = (value) => ({
    type: ADD_PLATFORM_NAME_INVEST,
    data: value
})

export const addPlatformInvest = (value) => ({
    type: ADD_PLATFORM_INVEST,
    data: value
})

export const resetDataInvest = () => ({
    type: RESET_DATA_INVEST,
    data: null
})