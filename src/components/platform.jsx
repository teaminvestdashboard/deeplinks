import {platformNEW} from "../__data__";
import {useDispatch} from "react-redux";
import {addPlatform} from "../__data__/actions/platformAction";
import {useState} from "react";

const Platform = () => {
    const [activePlatform, setActivePlatform] = useState(null)
    const dispatch = useDispatch();

    const handlePlatform = (item) => {
        setActivePlatform(item.id)
        dispatch(addPlatform(item.base))
    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Платформа</p>
            <div className={"block-wrapper"}>
                {platformNEW.map((item) => {
                    return (
                    <div className={"block-item"} key={item.id}>
                        <input
                            type={"radio"}
                            name={"platformNEW"}
                            id={`new${item.id}`}
                            value={item.id}
                            onChange={() => handlePlatform(item)}
                            checked={item.id === activePlatform}
                        />
                        <label htmlFor={`new${item.id}`}>{item.name}</label>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Platform