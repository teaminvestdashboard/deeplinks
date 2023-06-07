import {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {screen} from '../../__data__/db/portfolio'
import {addScreen} from '../../__data__/actions/portfolio/screenAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import SettingsContext from '../../Settings'
import {getTarget} from '../../utils'
import {PRODUCT} from '../../constants'


const Screen = () => {
    const [activeScreen, setActiveScreen] = useState(null)
    const deeplinkType = useSelector(({Links}) => Links.deeplinkType)
    const settings = useContext(SettingsContext)
    const dispatch = useDispatch()
    const {isWeb, product} = settings
    useEffect(() => {
        setActiveScreen(null);
    }, [isWeb, product])

    const target = getTarget(screen, settings)
    if (!target.length) { return null }

    const defaultDeeplinkType = product === PRODUCT.INVESTMENTS_DASHBOARD ? 'marketplace' : 'skor'

    const screenItems = deeplinkType ?
      target.find(item => item.code === deeplinkType) :
      target.find(item => item.code === defaultDeeplinkType)

    const handleDeeplink = (item) => {
        setActiveScreen(item.path)
        if (isWeb) {
            dispatch(addScreen(item.path))
        } else {
            dispatch(addScreen(item.path))
        }
    }

    return (
      <div className={"block"}>
          <Typography variant="h6" component="h2">
              Экран
          </Typography>
          <div className={"block-wrapper"}>
              <FormControl component="fieldset">
                  <RadioGroup>
                      {screenItems?.options.map((item) => {
                          return (
                            <div className={"block-item"} key={item.id}>
                                <FormControlLabel
                                  value={item.path}
                                  control={<Radio />}
                                  label={item.name}
                                  id={item.id}
                                  onChange={() => handleDeeplink(item)}
                                  checked={item.path === activeScreen}
                                />
                            </div>
                          )
                      })}
                  </RadioGroup>
              </FormControl>
          </div>
      </div>
    )
}

export default Screen
