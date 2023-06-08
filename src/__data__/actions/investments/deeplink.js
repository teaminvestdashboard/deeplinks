import { ADD_DEEPLINK_INVEST, ADD_DEEPLINK_TYPE_INVEST } from '../../consts'

export const addDeeplinkInvest = (value) => ({
  type: ADD_DEEPLINK_INVEST,
  data: value
})

export const addDeeplinkTypeInvest = (value) => ({
  type: ADD_DEEPLINK_TYPE_INVEST,
  data: value
})
