import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {screen, screenWeb} from "../__data__";
import {addScreen} from "../__data__/actions/screenAction";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";

const Screen = ({isWeb}) => {
    const reset = useSelector(({Links}) => Links.reset)
    const [activeScreen, setActiveScreen] = useState(reset ? 0 : null)
    const deeplinkType = useSelector(({Links}) => Links.deeplinkType)

    const dispatch = useDispatch();
    const target = isWeb ? screenWeb : screen
    const screenItems = isWeb ?
        target.find(item => item.code === "webmarketplace") :
        target.find(item => item.code === deeplinkType)

    const handleDeeplink = (item) => {
        setActiveScreen(item.path)
        if(isWeb) {
            dispatch(addScreen(item.path))
        } else {
            dispatch(addScreen(item.path))
        }
    }
    console.log(screenItems)

    return (
        <div className={"block"}>
            <Typography variant="h6" component="h2">
                Экран
            </Typography>
            <div className={"block-wrapper"}>
                <FormControl component="fieldset">
                    <RadioGroup
                        name={isWeb ? "screenWeb" : "screenNEW"}
                    >
                        {screenItems.options.map((item) => {
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