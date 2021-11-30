import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {externalSourcesNEW} from "../__data__";

import {addExternalSource} from "../__data__/actions/externalSourceAction";

const ExternalSource = () => {
    const [activeSource, setActiveSource] = useState("")

    const [activeUtmSource, setActiveUtmSource] = useState("")
    const [activeUtmMedium, setActiveUtmMedium] = useState("")
    const [activeUtmCompaign, setActiveUtmCompaign] = useState("")
    const [activeUtmContent, setActiveUtmContent] = useState("")
    const [activeUtmTerm, setActiveUtmTerm] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        if(activeSource === "other") {
            dispatch(addExternalSource(`&utm_source=${activeUtmSource}&utm_medium=${activeUtmMedium}&utm_compaign=${activeUtmCompaign}&utm_content=${activeUtmContent}&utm_term=${activeUtmTerm}`))
        }
    }, [dispatch, activeSource, activeUtmSource, activeUtmMedium, activeUtmCompaign, activeUtmContent, activeUtmTerm])

    const handleDeeplink = (item) => {
        setActiveSource(item.code)
        if(item.code !== "empty" && item.code !== "other"){
            dispatch(addExternalSource(`&external_source=${item.code}`))
        } else if (item.code === "other" && item.code !== "empty"){
            dispatch(addExternalSource(`&utm_source=${activeUtmSource}&utm_medium=${activeUtmMedium}&utm_compaign=${activeUtmCompaign}&utm_content=${activeUtmContent}&utm_term=${activeUtmTerm}`))
        } else {
            dispatch(addExternalSource(``))
        }

    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Внешний переход</p>
            <div className={"block-wrapper"}>
                {externalSourcesNEW.map((item) => {
                    return (
                        <div className={"block-item"} key={item.code}>
                            <input
                                type={"radio"}
                                name={"externalSourceNEW"}
                                id={`new${item.code}`}
                                value={item.code}
                                onChange={() => handleDeeplink(item)}
                                checked={item.code === activeSource}
                            />
                            <label htmlFor={`new${item.code}`}>{item.name}</label>
                        </div>
                    )
                })}
                <div className={"block-input"}>
                    <label>utm_source</label>
                    <input
                        type={"text"}
                        name={"utm_source"}
                        id={"newutem_source"}
                        value={activeUtmSource}
                        onChange={(e) => setActiveUtmSource(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <label>utm_medium</label>
                    <input
                        type={"text"}
                        name={"utm_medium"}
                        id={"newutm_medium"}
                        value={activeUtmMedium}
                        onChange={(e) => setActiveUtmMedium(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <label>utm_compaign</label>
                    <input
                        type={"text"}
                        name={"utm_compaign"}
                        id={"newutm_compaign"}
                        value={activeUtmCompaign}
                        onChange={(e) => setActiveUtmCompaign(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <label>utm_content</label>
                    <input
                        type={"text"}
                        name={"utm_content"}
                        id={"newutm_content"}
                        value={activeUtmContent}
                        onChange={(e) => setActiveUtmContent(e.currentTarget.value)}
                    />
                </div>
                <div className={"block-input"}>
                    <label>utm_term</label>
                    <input
                        type={"text"}
                        name={"utm_term"}
                        id={"newutem_term"}
                        value={activeUtmTerm}
                        onChange={(e) => setActiveUtmTerm(e.currentTarget.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExternalSource