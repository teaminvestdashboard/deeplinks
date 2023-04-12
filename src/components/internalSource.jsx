import {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {internalSources} from '../__data__'
import {addInternalSource} from '../__data__/actions/internalSourceAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import SettingsContext from '../Settings'
import {getTarget} from '../utils'


const InternalSource = () => {
    const externalSource = useSelector(({Links}) => Links.externalSource)
    const [activeSource, setActiveSource] = useState(null)
    const dispatch = useDispatch()
    const settings = useContext(SettingsContext)
    const {isWeb, product} = settings
    useEffect(() => {
        setActiveSource(null)
    }, [isWeb, product])
    useEffect(() => {
        if (externalSource) {
            setActiveSource(null)
        }
    }, [externalSource])

    const target = getTarget(internalSources, settings)

    const handleDeeplink = (item) => {
        setActiveSource(item.code)
        if(item.code !== "" && !isWeb){
            dispatch(addInternalSource(`&internal_source=${item.code}`))
        } else if (isWeb){
            dispatch(addInternalSource(`?from=${item.code}`))
        } else {
            dispatch(addInternalSource(``))
        }

    }

    return (
      <div className={"block"}>
          <Typography variant="h6" component="h2">
              Внутренний переход
          </Typography>
          <div className={"block-wrapper"}>
              <FormControl component="fieldset">
                  <RadioGroup>
                      {target.map((item) => {
                          return (
                            <div className={"block-item"} key={item.id}>
                                <FormControlLabel
                                  value={item.code}
                                  control={<Radio />}
                                  label={item.name}
                                  id={`new${item.code}`}
                                  onChange={() => handleDeeplink(item)}
                                  checked={item.code === activeSource}
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

export default InternalSource
