import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deeplinksNEW, deeplinksWeb} from "../__data__";
import {addDeeplink, addDeeplinkType} from "../__data__/actions/deeplinkAction";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const Deeplink = ({isWeb}) => {
    const reset = useSelector(({Links}) => Links.reset)
    const [activeDeeplink, setActiveDeeplink] = useState(reset ? 0 : null)
    const dispatch = useDispatch();

    const target = isWeb ? deeplinksWeb: deeplinksNEW

    const handleDeeplink = (item) => {
        setActiveDeeplink(item.id)
        dispatch(addDeeplink(item.path))
        dispatch(addDeeplinkType(item.id))
    }

    return (
            <div className={"block"}>
                <Typography variant="h6" component="h2">
                    Куда перейти
                </Typography>

                <div className={"block-wrapper"}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            name={isWeb ? "targetWeb" : "targetNEW"}
                        >
                            {target.map((item) => {
                                return (

                                    <div className={"block-item"} key={item.id}>
                                        <FormControlLabel
                                            value={item.path}
                                            control={<Radio />}
                                            label={item.name}
                                            id={`new${item.id}`}
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