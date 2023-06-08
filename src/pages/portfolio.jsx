import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Stack from '@mui/material/Stack'
import {Button, Typography} from '@mui/material'
import {resetData} from '../__data__/actions/portfolio/platformAction'
import {Container} from '../components/portfolio'
import SettingsContext from '../Settings'
import {PRODUCT} from '../constants'


export const Portfolio = () => {
  const [state, setState] = useState({
    product: PRODUCT.INVESTMENTS_DASHBOARD,
    isWeb: false,
  })
  const dispatch = useDispatch()

  const handleApp = (bool) => {
    setState({
      product: state.product,
      isWeb: bool,
    })
    dispatch(resetData())
  }

  const handleProduct = (product) => {
    setState({
      product,
      isWeb: false,
    })
    dispatch(resetData())
  }

  const { product, isWeb } = state;

  return (
    <div className={"window"}>
      <Typography variant={'h2'} component={'h2'} gutterBottom>Конструктор ссылок</Typography>

      <Stack className={"button-container"} direction="row" spacing={2}>
        <Button variant={product === PRODUCT.INVESTMENTS_DASHBOARD ? "contained" : "outlined"} onClick={() => handleProduct(PRODUCT.INVESTMENTS_DASHBOARD)}>Витрина</Button>
        <Button variant={product === PRODUCT.PORTFOLIO_ANALYTICS ? "contained" : "outlined"} onClick={() => handleProduct(PRODUCT.PORTFOLIO_ANALYTICS)}>Аналитика портфеля</Button>
        {/*<Button variant={product === PRODUCT.PORTFOLIO_BALANCE ? "contained" : "outlined"} onClick={() => handleProduct(PRODUCT.PORTFOLIO_BALANCE)} disabled={true}>Оценка портфеля</Button>*/}
      </Stack>

      <Stack className={"button-container"} direction="row" spacing={2}>
        <Button variant={isWeb ? "outlined" : "contained"} onClick={() => handleApp(false)}>Mobile</Button>
        <Button variant={isWeb ? "contained" : "outlined"} onClick={() => handleApp(true)}>Web</Button>
      </Stack>

      <SettingsContext.Provider value={state}>
        <Container />
      </SettingsContext.Provider>
    </div>
  )
}

export default Portfolio;
