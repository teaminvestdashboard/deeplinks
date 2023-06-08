import React, { useState, useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addPlatformInvest, addScreenInvest, addDeeplinkInvest, addDeeplinkTypeInvest, addSourceInvest, addSourceTypeInvest, addVersionInvest, addPlatformNameInvest } from '../../__data__/actions/investments'


export const Selection = ({ name, id, items, type, initValue = "" }) => {

  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue(initValue)
  }, [initValue])


  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (type) {
      case "platform":
        dispatch(addPlatformInvest(event.target.value))
        dispatch(addPlatformNameInvest(event.target.value.name))
        break;
      case "deeplink":
        dispatch(addDeeplinkInvest(event.target.value))
        dispatch(addDeeplinkTypeInvest(event.target.value.code))
        break;
      case "versions":
        dispatch(addVersionInvest(event.target.value))
        break;
      case "screen":
        dispatch(addScreenInvest(event.target.value))
        break;
      case "sourcesType":
        dispatch(addSourceTypeInvest(event.target.value.code))
        break;
      case "sources":
        dispatch(addSourceInvest(event.target.value))
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
