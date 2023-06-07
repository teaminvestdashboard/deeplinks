import React from 'react'
import { Typography } from '@mui/material'

export const Info = ({ info }) => {

  return (
    <div>
      {info && info.map((item) => (
        <Typography key={item.title} variant="h6" component="h2">
          {item.title}: {item.value}
        </Typography>
      ))}
    </div>
  )
}

