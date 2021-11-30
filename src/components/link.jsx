import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addLink} from "../__data__/actions/linkAction";

const Link = () => {
    const links = useSelector(({Links}) => Links);
    const path = `${links.platform}${links.deeplink}${links.screen}${links.internalSource}${links.externalSource}`
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addLink(path))
    }, [dispatch, path])
    return (
        <a href={path} target="_blank" rel="noreferrer">{path}</a>
    )
}

export default Link
