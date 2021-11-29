import {useState} from "react";
import {useDispatch} from "react-redux";

import {targets} from "../__data__";
import {addTarget} from "../__data__/actions/targetAction";

const Target = () => {
    const [activeTarget, setActiveTarget] = useState(null)
    const dispatch = useDispatch();

    const handleTarget = (item) => {
        setActiveTarget(item.code)
        dispatch(addTarget(item.code))
    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Куда перейти</p>
            <div className={"block-wrapper"}>
                {targets.map((item) => {
                    return (
                        <div className={"block-item"} key={item.code}>
                            <input
                                type={"radio"}
                                name={"targetNEW"}
                                id={`new${item.code}`}
                                value={item.code}
                                onChange={() => handleTarget(item)}
                                checked={item.code === activeTarget}
                            />
                            <label htmlFor={`new${item.code}`}>{item.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Target;