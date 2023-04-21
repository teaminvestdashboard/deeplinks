import {useCallback, useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {externalSources} from '../__data__'
import {addExternalSource} from '../__data__/actions/externalSourceAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material'
import SettingsContext from '../Settings'
import {getTarget} from '../utils'
import {PRODUCT} from '../constants'


const ExternalSource = () => {
    const internalSource = useSelector(({Links}) => Links.internalSource)
    const [activeSource, setActiveSource] = useState(null)

    const utmArray = ["utm_source", "utm_medium", "utm_compaign", "utm_content", "utm_term"]

    const [activeUtmSource, setActiveUtmSource] = useState("")
    const [activeUtmMedium, setActiveUtmMedium] = useState("")
    const [activeUtmCompaign, setActiveUtmCompaign] = useState("")
    const [activeUtmContent, setActiveUtmContent] = useState("")
    const [activeUtmTerm, setActiveUtmTerm] = useState("")
    const [activeUtm, setUtm] = useState("")

    const [activeDiff, setDiff] = useState("")

    const dispatch = useDispatch()

    const settings = useContext(SettingsContext)
    const {isWeb, product} = settings
    useEffect(() => {
        setActiveSource(null)
        setDiff('')
        setUtm('')
        addExternalSource('')
    }, [isWeb, product])
    useEffect(() => {
        if (internalSource) {
            setActiveSource(null)
        }
    }, [internalSource])

    const target = getTarget(externalSources, settings)


    const handleStateUtm = useCallback((id, value) => {
        switch (id){
            case "utm_source":
                setActiveUtmSource(value)
                break;
            case "utm_medium":
                setActiveUtmMedium(value)
                break;
            case "utm_compaign":
                setActiveUtmCompaign(value)
                break;
            case "utm_content":
                setActiveUtmContent(value)
                break;
            case "utm_term":
                setActiveUtmTerm(value)
                break;
            default:
                break;
        }
    }, [])

    const handleUtm = useCallback(() => {
        const amp = '&'
        const tempSource = activeUtmSource === "" ?  "" : `utm_source=${activeUtmSource}`;
        const tempMedium = activeUtmMedium === "" ? "" : `utm_medium=${activeUtmMedium}`;
        const tempCompaign = activeUtmCompaign === "" ? "" : `utm_compaign=${activeUtmCompaign}`;
        const tempContent = activeUtmContent === "" ? "" : `utm_content=${activeUtmContent}`;
        const tempTerm = activeUtmTerm === "" ? "" : `utm_term=${activeUtmTerm}`;

        const utmList = [tempSource, tempMedium, tempCompaign, tempContent, tempTerm].filter(v => !!v)
        const prefix = product === PRODUCT.INVESTMENTS_DASHBOARD ? '&' : '?'
        const utmParams = utmList.length ? `${prefix}${utmList.join(amp)}` : ''
        setUtm( utmParams )
    }, [activeUtmCompaign, activeUtmContent, activeUtmMedium, activeUtmSource, activeUtmTerm, product])

    useEffect(() => {
        if(activeSource === "utm") {
            dispatch(addExternalSource(activeUtm))
            handleUtm()
        } else if (activeSource === "diff" || activeSource === 'external-diff'){
            const prefix = product === PRODUCT.INVESTMENTS_DASHBOARD ? '&' : '?'

            if ((product === PRODUCT.INVESTMENTS_DASHBOARD && activeSource === 'diff') ||
              (product === PRODUCT.PORTFOLIO_ANALYTICS && activeSource === 'external-diff')) {
                dispatch(addExternalSource(`${prefix}external_source=${activeDiff}`))
            }
        }
    }, [dispatch, activeUtm, activeSource, activeDiff, handleUtm])

    const handleDeeplink = (item) => {
        setActiveSource(item.code)

        if(item.code !== "empty" && item.code !== "utm" && item.code !=="diff" && !settings.isWeb && product === PRODUCT.INVESTMENTS_DASHBOARD){
            dispatch(addExternalSource(`&external_source=${item.code}`))
        } else if(item.code !== "empty" && item.code !== "utm" && item.code !=="diff" && !settings.isWeb && product !== PRODUCT.INVESTMENTS_DASHBOARD){
            dispatch(addExternalSource(`?external_source=${item.code}`))
        } else if (item.code === "utm"){
            dispatch(addExternalSource(activeUtm))
        } else if((item.code === "diff" || item.code === "external-diff") && product === PRODUCT.INVESTMENTS_DASHBOARD){
            dispatch(addExternalSource(`&external_source=${activeDiff}`))
        }  else if((item.code === "diff" || item.code === "external-diff") && product !== PRODUCT.INVESTMENTS_DASHBOARD){
            dispatch(addExternalSource(`?external_source=${activeDiff}`))
        } else if (settings.isWeb && item.code !== "empty") {
            dispatch(addExternalSource(`?from=${item.code}`))
        } else {
            dispatch(addExternalSource(``))
        }
    }

    return (
      <div className={'block'}>
          <Typography variant="h6" component="h2">
              Внешний переход
          </Typography>
          <div className={'block-wrapper'}>
              <FormControl component="fieldset">
                  <RadioGroup>
                      {target.map((item) => {
                          if (item.code !== 'diff' && item.code !== 'external-diff') {
                              return (
                                <div className={'block-item'} key={item.id}>
                                    <FormControlLabel
                                      value={item.code}
                                      control={<Radio/>}
                                      label={item.name}
                                      id={`new${item.code}`}
                                      onChange={() => handleDeeplink(item)}
                                      checked={item.code === activeSource}
                                    />
                                </div>
                              )
                          } else {
                              return (
                                <div className={'block-item'} key={item.id}>
                                    <FormControlLabel
                                      value={item.code}
                                      control={<Radio/>}
                                      label={item.name}
                                      id={`new${item.code}`}
                                      onChange={() => handleDeeplink(item)}
                                      checked={item.code === activeSource}
                                    />
                                    <div className={'block-input'}>
                                        <TextField
                                          name={`${item.code}`}
                                          id={`${item.code}`}
                                          label="Другое"
                                          variant="outlined"
                                          value={activeDiff}
                                          onChange={(e) => {
                                              setDiff(e.target.value)
                                          }}
                                        />
                                    </div>
                                </div>
                              )
                          }
                      })}
                  </RadioGroup>
              </FormControl>
              {utmArray.map((item) => {
                  return (
                    <div className={'block-input'} key={item}>
                        <TextField
                          name={item}
                          id={item}
                          label={item}
                          variant="outlined"
                          onChange={(e) => {
                              handleStateUtm(item, e.target.value)
                          }}
                        />
                    </div>
                  )
              })}
          </div>
      </div>
    )
}

export default ExternalSource
