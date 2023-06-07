import {useContext, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {deeplinks} from '../../__data__/db/portfolio'
import {addDeeplink, addDeeplinkType} from '../../__data__/actions/portfolio/deeplinkAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import SettingsContext from '../../Settings'
import {getTarget} from '../../utils'


const Deeplink = () => {
  const [activeDeeplink, setActiveDeeplink] = useState(null)
  const dispatch = useDispatch()
  const settings = useContext(SettingsContext)
  const {isWeb, product} = settings
  useEffect(() => {
    setActiveDeeplink(null)
  }, [isWeb, product])

  const target = getTarget(deeplinks, settings)

  const handleDeeplink = (item) => {
    setActiveDeeplink(item.id)
    dispatch(addDeeplink(item.title))
    dispatch(addDeeplinkType(item.name))
  }

  return (
    <div className={"block"}>
      <Typography variant="h6" component="h2">
        Куда перейти
      </Typography>

      <div className={"block-wrapper"}>
        <FormControl component="fieldset">
          <RadioGroup>
            {target.map((item) => {
              return (
                <div className={"block-item"} key={item.id}>
                  <FormControlLabel
                    value={item.path}
                    control={<Radio />}
                    label={item.title}
                    id={item.id}
                    onChange={() => handleDeeplink(item)}
                    checked={item.id === activeDeeplink}
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

export default Deeplink;
