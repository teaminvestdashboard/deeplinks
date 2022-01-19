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
    const [activeUtm, setUtm] = useState("")

    const [activeDiff, setDiff] = useState("")

    const dispatch = useDispatch();

    const target = isWeb ? externalSourcesWeb : externalSourcesNEW


    const handleUtm = () => {
        const tempSource = activeUtmSource === "" ?  "" : `&utm_source=${activeUtmSource}`;
        const tempMedium = activeUtmMedium === "" ? "" : `&utm_medium=${activeUtmMedium}`;
        const tempCompaign = activeUtmCompaign === "" ? "" : `&utm_compaign=${activeUtmCompaign}`;
        const tempContent = activeUtmContent === "" ? "" : `&utm_content=${activeUtmContent}`;
        const tempTerm = activeUtmTerm === "" ? "" : `&utm_term=${activeUtmTerm}`;
        setUtm( `${tempSource}${tempMedium}${tempCompaign}${tempContent}${tempTerm}`)
    }

    useEffect(() => {
        if(activeSource === "utm") {
            dispatch(addExternalSource(activeUtm))
            handleUtm()
        } else if (activeSource === "diff"){
            dispatch(addExternalSource(`&external_source=${activeDiff}`))
        }
    }, [dispatch, activeUtm, activeSource, activeDiff, handleUtm])

    const handleDeeplink = (item) => {
        setActiveSource(item.code)

        if(item.code !== "empty" && item.code !== "utm" && item.code !=="diff" && !isWeb){
            dispatch(addExternalSource(`&external_source=${item.code}`))
        } else if (item.code === "utm" && item.code !== "empty"){
            dispatch(addExternalSource(activeUtm))
        } else if(item.code === "diff" && item.code !== "empty"){
            dispatch(addExternalSource(`&external_source=${activeDiff}`))
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
                            if(item.code !== "diff") {
                                return(
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
                            } else {
                                return(
                                    <div className={"block-item"} key={item.code}>
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
                                                name={"diff"}
                                                id={"diff"}
                                                label="Другое"
                                                variant="outlined"
                                                value={activeDiff}
                                                onChange={(e) => {
                                                    setDiff(e.target.value);
                                                    console.log(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>

                                )
                            }
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
                        onChange={(e) => {
                            setActiveUtmSource(e.target.value);

                        }}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_medium"}
                        id={"newutm_medium"}
                        label="utm_medium"
                        variant="outlined"
                        value={activeUtmMedium}
                        onChange={(e) => {
                            setActiveUtmMedium(e.target.value);
                        }}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_compaign"}
                        id={"newutm_compaign"}
                        label="utm_compaign"
                        variant="outlined"
                        value={activeUtmCompaign}
                        onChange={(e) => {
                            setActiveUtmCompaign(e.target.value);
                        }}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_content"}
                        id={"newutm_content"}
                        label="utm_content"
                        variant="outlined"
                        value={activeUtmContent}
                        onChange={(e) => {
                            setActiveUtmContent(e.target.value);
                        }}
                    />
                </div>
                <div className={"block-input"}>
                    <TextField
                        name={"utm_term"}
                        id={"newutm_term"}
                        label="utm_term"
                        variant="outlined"
                        value={activeUtmTerm}
                        onChange={(e) => {
                            setActiveUtmTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExternalSource