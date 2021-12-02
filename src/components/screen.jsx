import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {screen, screenWeb} from "../__data__";
import {addScreen} from "../__data__/actions/screenAction";

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
        setActiveScreen(item.code)
        if(isWeb) {
            dispatch(addScreen(`?${screenItems.param}=%2F${item.code}`))
        } else {
            dispatch(addScreen(`?${screenItems.param}=${item.code}`))
        }
    }
    console.log("screen", activeScreen)


    return (
        <div className={"block"}>
            <p className={"block-name"}>Экран</p>
            <div className={"block-wrapper"}>
                {screenItems.options.map((item) => {
                        return (
                            <div className={"block-item"} key={item.code}>
                                <input
                                    type={"radio"}
                                    name={isWeb ? "screenWeb" : "screenNEW"}
                                    id={`new${item.code}`}
                                    value={item.code}
                                    onChange={() => handleDeeplink(item)}
                                    checked={item.code === activeScreen}
                                />
                                <label htmlFor={`new${item.code}`}>{item.name}</label>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default Screen