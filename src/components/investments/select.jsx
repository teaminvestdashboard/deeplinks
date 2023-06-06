import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {useDispatch} from 'react-redux'
import { addDeeplinkType } from '../../__data__/actions/deeplinkAction';
import { addVersion } from '../../__data__/actions/investments';


export const Selection = ({ name, id, items, action, type }) => {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (type) {
      case "platform":
        dispatch(action(event.target.value.path))
        break;
      case "deeplink":
        dispatch(action(event.target.value.title))
        dispatch(addDeeplinkType(event.target.value.name))
        break;
      case "versions":
        dispatch(addVersion(event.target.value.title))
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
