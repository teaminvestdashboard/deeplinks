import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {externalSourcesNEW, externalSourcesWeb} from "../__data__";

import {addExternalSource} from "../__data__/actions/externalSourceAction";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";

const ExternalSource = ({isWeb}) => {
    const reset = useSelector(({Links}) => Links.reset)
    const [activeSource, setActiveSource] = useState(reset ? 0 : null)

    const [activeUtmSource, setActiveUtmSource] = useState("")
    const [activeUtmMedium, setActiveUtmMedium] = useState("")
    const [activeUtmCompaign, setActiveUtmCompaign] = useState("")
    const [activeUtmContent, setActiveUtmContent] = useState("")
    const [activeUtmTerm, setActiveUtmTerm] = useState("")

    const dispatch = useDispatch();

    const target = isWeb ? externalSourcesWeb : externalSourcesNEW

    useEffect(() => {
        if(activeSource === "other") {
            dispatch(addExternalSource(`&utm_source=${activeUtmSource}&utm_medium=${activeUtmMedium}&utm_compaign=${activeUtmCompaign}&utm_content=${activeUtmContent}&utm_term=${activeUtmTerm}`))
        }
    }, [dispatch, activeSource, activeUtmSource, activeUtmMedium, activeUtmCompaign, activeUtmContent, activeUtmTerm])

    const handleDeeplink = (item) => {
        setActiveSource(item.code)
        if(item.code !== "empty" && item.code !== "other" && !isWeb){
            dispatch(addExternalSource(`&external_source=${item.code}`))
        } else if (item.code === "other" && item.code !== "empty"){
            dispatch(addExternalSource(`&utm_source=${activeUtmSource}&utm_medium=${activeUtmMedium}&utm_compaign=${activeUtmCompaign}&utm_content=${activeUtmContent}&utm_term=${activeUtmTerm}`))
        } else if (isWeb && item.code !== "empty") {
            dispatch(addExternalSource(`?from=${item.code}`))
        } else {
            dispatch(addExternalSource(``))
        }
    }

    return (
        <div className={"block"}>
            <Typography variant="h6" component="h2">
                Внешний переход
            </Typography>
            <div className={"block-wrapper"}>
                <FormControl component="fieldset">
                    <RadioGroup
                        name={isWeb ? "externalSourceWeb" : "externalSourceNEW"}
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
                <div className={"block-input"}>
                    <TextField
                        name={"utm_source"}
                        id={"newutem_source"}
                        label="utm_source"
                        variant="outlined"
                        value={activeUtmSource}
                        onChange={(e) => setActiveUtmSource(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_medium"}
                        id={"newutm_medium"}
                        label="utm_medium"
                        variant="outlined"
                        value={activeUtmMedium}
                        onChange={(e) => setActiveUtmMedium(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_compaign"}
                        id={"newutm_compaign"}
                        label="utm_compaign"
                        variant="outlined"
                        value={activeUtmCompaign}
                        onChange={(e) => setActiveUtmCompaign(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_content"}
                        id={"newutm_content"}
                        label="utm_content"
                        variant="outlined"
                        value={activeUtmContent}
                        onChange={(e) => setActiveUtmContent(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_term"}
                        id={"newutm_term"}
                        label="utm_term"
                        variant="outlined"
                        value={activeUtmTerm}
                        onChange={(e) => setActiveUtmTerm(e.currentTarget.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExternalSource