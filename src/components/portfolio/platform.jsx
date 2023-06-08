import {useEffect, useState, useContext} from 'react'
import {useDispatch} from 'react-redux'
import {platform} from '../../__data__/db/portfolio'
import {addPlatform} from '../../__data__/actions/portfolio/platformAction'
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import SettingsContext from '../../Settings';
import { getTarget } from '../../utils';


const Platform = () => {
    const [activePlatform, setActivePlatform] = useState(null)
    const dispatch = useDispatch();
    const settings = useContext(SettingsContext);
    const {isWeb, product} = settings;
    useEffect(() => {
        setActivePlatform(null);
    }, [isWeb, product])

    const target = getTarget(platform, settings);

    const handlePlatform = (item) => {
        setActivePlatform(item.id)
        dispatch(addPlatform(item.base))
    }

    return (
      <div className={"block"}>
          <Typography variant="h6" component="h2">
              Платформа
          </Typography>
          <div className={"block-wrapper"}>
              <FormControl component="fieldset">
                  <RadioGroup>
                      {target.map((item) => {
                          return (
                            <div className={"block-item"} key={item.id}>
                                <FormControlLabel
                                  value={item.id}
                                  control={<Radio />}
                                  label={item.title}
                                  id={`new${item.id}`}
                                  onChange={() => handlePlatform(item)}
                                  checked={item.id === activePlatform}
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

export default Platform
