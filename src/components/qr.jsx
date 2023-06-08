import React from 'react'
import QRCode from 'qrcode.react'

export const QrCode = ({ path }) => {
  return (
    <QRCode value={path} />
  )
}
