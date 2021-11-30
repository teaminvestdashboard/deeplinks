import {useState} from "react";
import {useDispatch} from "react-redux";

import {deeplinksNEW} from "../__data__";
import {addDeeplink} from "../__data__/actions/deeplinkAction";

const Deeplink = () => {
    const [activeDeeplink, setActiveDeeplink] = useState(null)
    const dispatch = useDispatch();

    const handleDeeplink = (item) => {
        setActiveDeeplink(item.id)
        dispatch(addDeeplink(item.path))
    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Куда перейти</p>
            <div className={"block-wrapper"}>
                {deeplinksNEW.map((item) => {
                    return (
                        <div className={"block-item"} key={item.id}>
                            <input
                                type={"radio"}
                                name={"targetNEW"}
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