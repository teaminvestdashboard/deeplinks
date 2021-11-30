import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {screen} from "../__data__";
import {addScreen} from "../__data__/actions/screenAction";

const Screen = () => {
    const [activeScreen, setActiveScreen] = useState(null)
    const deeplinkType = useSelector(({Links}) => Links.deeplinkType)
    const dispatch = useDispatch();
    const screenItems = screen.find(item => item.code === deeplinkType)

    const handleDeeplink = (item) => {
        setActiveScreen(item.code)
        dispatch(addScreen(`?${screenItems.param}=${item.code}`))
    }

    return (
        <div className={"block"}>
            <p className={"block-name"}>Экран</p>
            <div className={"block-wrapper"}>
                {screenItems.options.map((item) => {
                        return (
                            <div className={"block-item"} key={item.code}>
                                <input
                                    type={"radio"}
                                    name={"screenNEW"}
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