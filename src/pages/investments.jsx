import React from 'react'
import { Button, Typography, Stack } from '@mui/material'
import { Container } from '../components/investments'

export const Investments = () => {
  return (
    <div className="window">
      <Typography variant="h2" component="h1" gutterBottom>Конструктор ссылок</Typography>
      <Stack className={"button-container"} direction="row" spacing={2}>
        <Button variant="contained">Mobile</Button>
        {/* <Button variant={isWeb ? "contained" : "outlined"} onClick={() => handleApp(true)}>Web</Button> */}
      </Stack>
      <Container/>
    </div>
  )
}
