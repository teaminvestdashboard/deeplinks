import { ADD_SOURCE_INVEST, ADD_SOURCE_TYPE_INVEST } from "../../consts"

export const addSourceTypeInvest = (value) => ({
  type: ADD_SOURCE_TYPE_INVEST,
  data: value
})

export const addSourceInvest = (value) => ({
  type: ADD_SOURCE_INVEST,
  data: value
})
