import {useSelector} from "react-redux";

const Info = () => {
    const links = useSelector(({Links}) => Links)

    return(
        <div>
            <p>platform: {links.platform}</p>
            <p>deeplinkType: {links.deeplinkType}</p>
            <p>deeplink: {links.deeplink}</p>
            <p>screen: {links.screen}</p>
            <p>internalSource: {links.internalSource}</p>
            <p>externalSource: {links.externalSource}</p>
        </div>
    )
}

export default Info;