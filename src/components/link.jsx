import React from "react";
import {useSelector} from "react-redux";

const Link = () => {
    const links = useSelector(({Links}) => Links.platform);
    console.log(links)
    return (
        <a>AAA</a>
    )
}

export default Link
