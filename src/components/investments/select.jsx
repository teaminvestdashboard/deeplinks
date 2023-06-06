import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {useDispatch} from 'react-redux'
import { addDeeplink, addDeeplinkType } from '../../__data__/actions/deeplinkAction';
import { addSource, addSourceType, addVersion, addPlatformName } from '../../__data__/actions/investments'
import { addScreen } from '../../__data__/actions/screenAction';
import { addPlatform } from '../../__data__/actions/platformAction';


export const Selection = ({ name, id, items, type }) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (type) {
      case "platform":
        dispatch(addPlatform(event.target.value.path))
        dispatch(addPlatformName(event.target.value.name))
        break;
      case "deeplink":
        dispatch(addDeeplink(event.target.value.title))
        dispatch(addDeeplinkType(event.target.value.code))
        break;
      case "versions":
        dispatch(addVersion(event.target.value.name))
        break;
      case "screen":
        dispatch(addScreen(event.target.value.path))
        break;
      case "sourcesType":
        dispatch(addSourceType(event.target.value.code))
        break;
      case "sources":
        dispatch(addSource(event.target.value.code))
        break;
      default:
        break;
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{name}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={name}
        onChange={handleChange}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item.id} value={item}>{item.title}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
