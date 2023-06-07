import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '../components/investments'

export const Investments = () => {
  return (
    <div className="window">
      <Typography variant="h2" component="h1" gutterBottom>Витрина инвестиций</Typography>
      <Container/>
    </div>
  )
}
