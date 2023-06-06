
import React from 'react'
import Info from '../info'
import LinkWrap from '../link'
import QrCode from '../qr'
import { Selection } from './select'
import {addPlatform} from '../../__data__/actions/platformAction'
import { platform, versions } from '../../__data__/investments'
import { ScreenWrapper } from './screenWrapper'
import { useSelector } from 'react-redux'
import { DeeplinkWrapper } from './deeplinkWrapper'

export const Container = () => {
  const version = useSelector(({ investments }) => investments.version)
  const deeplinkType = useSelector(({ investments }) => investments.deeplinkType)

  return (
    <div className={"container"}>
      <LinkWrap/>
      <div className={"wrapper"}>
        <Selection name="Платформа" id="platform-invest" items={platform} action={addPlatform} type="platform"/>
        <Selection name="Версии" id="versions-invest" items={versions} action={addPlatform} type="versions"/>
        {version && <DeeplinkWrapper/>}
        {version && deeplinkType && <ScreenWrapper/>}
      </div>
      <QrCode/>
      <Info/>
    </div>
  )
}
