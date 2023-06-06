import React from 'react'
import { Link } from "react-router-dom"
import { Button, Stack, Typography } from '@mui/material'

export const Main = () => {
  return (
    <div className="main-wrapper">
      <Typography variant="h2" component="h1" textAlign="center">Конструктор ссылок</Typography>
      <Stack spacing={2} marginTop="50px">
        <Button variant="contained" component={Link} to="/investments">Витрина инвестиций</Button>
        <Button variant="contained" component={Link} to="/portfolio">Аналитика портфеля</Button>
      </Stack>
    </div>
  )
}
