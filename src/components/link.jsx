import {useSelector} from "react-redux";

const Link = () => {
    const links = useSelector(({Links}) => Links);
    const path = `${links.platform}${links.deeplink}${links.screen}${links.internalSource}${links.externalSource}`
    return (
        <a href={path} target="_blank" rel="noreferrer">{path}</a>
    )
}

export default Link
