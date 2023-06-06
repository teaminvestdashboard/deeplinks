import { ADD_SOURCE, ADD_SOURCE_TYPE } from "../../consts"

export const addSourceType = (value) => ({
  type: ADD_SOURCE_TYPE,
  data: value
})

export const addSource = (value) => ({
  type: ADD_SOURCE,
  data: value
})
