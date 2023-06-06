
import React from 'react'
import Info from '../info'
import LinkWrap from '../link'
import QrCode from '../qr'
import { Selection } from './select'
import {addPlatform} from '../../__data__/actions/platformAction'
import { deeplink, platform, versions } from '../../__data__/investments'
import { addDeeplink } from '../../__data__/actions/deeplinkAction'

export const Container = () => {


  return (
    <div className={"container"}>
      <LinkWrap/>
      <div className={"wrapper"}>
        <Selection name="Платформа" id="platform-invest" items={platform} action={addPlatform} type="platform"/>
        <Selection name="Версии" id="versions-invest" items={versions} action={addPlatform} type="versions"/>
        <Selection name="Куда перейди" id="deeplink-invest" items={deeplink} action={addDeeplink} type="deeplink"/>
      </div>
      <QrCode/>
      <Info/>
    </div>
  )
}
