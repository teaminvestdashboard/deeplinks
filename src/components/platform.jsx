import {platformNEW, platformWeb} from "../__data__";
import {useDispatch} from "react-redux";
import {addPlatform, webPlatform} from "../__data__/actions/platformAction";
import {useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const Platform = ({isWeb}) => {
    const [activePlatform, setActivePlatform] = useState(0)
    const dispatch = useDispatch();

    const target = isWeb ? platformWeb : platformNEW

    const handlePlatform = (item) => {
        setActivePlatform(item.id)
        dispatch(addPlatform(item.base))
        if(item.id === "web") {
            dispatch(webPlatform())
        }
    }

    return (
        <div className={"block"}>
            <Typography variant="h6" component="h2">
                Платформа
            </Typography>
            <div className={"block-wrapper"}>
                <FormControl component="fieldset">
                    <RadioGroup
                        name={isWeb ? "platformWeb" : "platformNEW"}
                    >
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