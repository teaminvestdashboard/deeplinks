import {useState} from "react";
import {useDispatch} from "react-redux";
import {internalSources} from "../__data__";
import {addInternalSource} from "../__data__/actions/internalSourceAction";

const InternalSource = () => {
    const [activeSource, setActiveSource] = useState(null)
    const dispatch = useDispatch();

    const handleDeeplink = (item) => {
        setActiveSource(item.code)
        if(item.code !== ""){
            dispatch(addInternalSource(`&internal_source=${item.code}`))
        } else {
            dispatch(addInternalSource(``))
        }

    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Внутренний переход</p>
            <div className={"block-wrapper"}>
                {internalSources.map((item) => {
                    return (
                        <div className={"block-item"} key={item.code}>
                            <input
                                type={"radio"}
                                name={"internalSourceNEW"}
                                id={`new${item.code}`}
                                value={item.code}
                                onChange={() => handleDeeplink(item)}
                                checked={item.code === activeSource}
                            />
                            <label htmlFor={`new${item.code}`}>{item.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InternalSource