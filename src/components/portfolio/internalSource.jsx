import {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {internalSources} from '../../__data__/db/portfolio'
import {addInternalSource} from '../../__data__/actions/portfolio/internalSourceAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material'
import SettingsContext from '../../Settings'
import {getTarget} from '../../utils'
import {PRODUCT} from '../../constants'


const InternalSource = () => {
    const externalSource = useSelector(({Links}) => Links.externalSource)
    const [activeSource, setActiveSource] = useState(null)
    const [activeDiff, setDiff] = useState("")
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

    useEffect(() => {
        if (activeSource === "internal_diff") {
            dispatch(addInternalSource(`?internal_source=${activeDiff}`))
        }
    }, [dispatch, activeSource, activeDiff])

    const target = getTarget(internalSources, settings)

    const handleDeeplink = (item) => {
        setActiveSource(item.code)

        if(item.code !== "" && item.code !=="internal_diff" && !isWeb && product === PRODUCT.INVESTMENTS_DASHBOARD){
            dispatch(addInternalSource(`&internal_source=${item.code}`))
        } else if(item.code !== "" && item.code !=="internal_diff" && !isWeb && product === PRODUCT.PORTFOLIO_ANALYTICS){
            dispatch(addInternalSource(`?internal_source=${item.code}`))
        } else if (item.code === "internal_diff"){
            dispatch(addInternalSource(`?internal_source=`))
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
                          if(item.code !== "internal_diff") {
                              return(
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
                          } else {
                              return(
                                <div className={"block-item"} key={item.id}>
                                    <FormControlLabel
                                      value={item.code}
                                      control={<Radio />}
                                      label={item.name}
                                      id={`new${item.code}`}
                                      onChange={() => handleDeeplink(item)}
                                      checked={item.code === activeSource}
                                    />
                                    <div className={"block-input"}>
                                        <TextField
                                          name={"internal_diff"}
                                          id={"internal_diff"}
                                          label="Другое"
                                          variant="outlined"
                                          value={activeDiff}
                                          onChange={(e) => {
                                              setDiff(e.target.value);
                                          }}
                                        />
                                    </div>
                                </div>
                              )
                          }
                      })}
                  </RadioGroup>
              </FormControl>
          </div>
      </div>
    )
}

export default InternalSource
