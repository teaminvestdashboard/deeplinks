import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {internalSources, internalSourceWeb} from "../__data__";
import {addInternalSource} from "../__data__/actions/internalSourceAction";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const InternalSource = ({isWeb}) => {
    const reset = useSelector(({Links}) => Links.reset)
    const [activeSource, setActiveSource] = useState(reset? 0 : null)
    const dispatch = useDispatch();

    const target = isWeb ? internalSourceWeb : internalSources

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
                    <RadioGroup
                        name={isWeb ? "internalSourceWeb" : "internalSourceNEW"}
                    >
                        {target.map((item) => {
                            return (

                                <div className={"block-item"} key={item.code}>
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