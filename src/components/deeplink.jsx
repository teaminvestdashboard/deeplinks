import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deeplinksNEW, deeplinksWeb} from "../__data__";
import {addDeeplink, addDeeplinkType} from "../__data__/actions/deeplinkAction";

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

    console.log("deeplink", activeDeeplink)

    return (
            <div className={"block"}>
                <p className={"block-name"}>Куда перейти</p>
                <div className={"block-wrapper"}>
                    {target.map((item) => {
                        return (
                            <div className={"block-item"} key={item.id}>
                                <input
                                    type={"radio"}
                                    name={isWeb ? "targetWeb" : "targetNEW"}
                                    id={`new${item.id}`}
                                    value={item.path}
                                    onChange={() => handleDeeplink(item)}
                                    checked={item.id === activeDeeplink}
                                />
                                <label htmlFor={`new${item.id}`}>{item.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>

    )

}

export default Deeplink;