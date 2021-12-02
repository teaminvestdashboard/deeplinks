import {platformNEW, platformWeb} from "../__data__";
import {useDispatch} from "react-redux";
import {addPlatform, webPlatform} from "../__data__/actions/platformAction";
import {useState} from "react";

const Platform = ({isWeb}) => {
    const [activePlatform, setActivePlatform] = useState(0)
    const dispatch = useDispatch();

    const target = isWeb ? platformWeb : platformNEW

    const handlePlatform = (item) => {
        setActivePlatform(item.tab_id)
        dispatch(addPlatform(item.base))
        if(item.id === "web") {
            dispatch(webPlatform())
        }
    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Платформа</p>
            <div className={"block-wrapper"}>
                {target.map((item) => {
                    return (
                    <div className={"block-item"} key={item.id}>
                        <input
                            type={"radio"}
                            name={isWeb ? "platformWeb" : "platformNEW"}
                            id={`new${item.id}`}
                            value={item.id}
                            onChange={() => handlePlatform(item)}
                            checked={item.tab_id === activePlatform}
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