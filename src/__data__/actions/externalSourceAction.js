import {ADD_EXTERNAL_SOURCE} from "../consts";

export const addExternalSource = (value) => ({
    type: ADD_EXTERNAL_SOURCE,
    data: value
})