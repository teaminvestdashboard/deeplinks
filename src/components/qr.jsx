import React from "react";
import {useSelector} from "react-redux";
import QRCode from "qrcode.react"

const QrCode = () => {
    const path = useSelector((({Links}) => Links.link))
    return(
        <QRCode value={path}/>
    )
}

export default QrCode