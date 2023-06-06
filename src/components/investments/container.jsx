
import React from 'react'
import Info from '../info'
import LinkWrap from '../link'
import QrCode from '../qr'
import { Selection } from './select'
import {addPlatform} from '../../__data__/actions/platformAction'
import { platform as platformArray, sourcesType, versions } from '../../__data__/investments'
import { ScreenWrapper } from './screenWrapper'
import { useSelector } from 'react-redux'
import { DeeplinkWrapper } from './deeplinkWrapper'
import { SourcesWrapper } from './sourcesWrapper'

export const Container = () => {
  const {platform, version, deeplinkType, screen, sourceType, source} = useSelector(({investments}) => investments)

  const path = `${platform}${screen}${source}`

  return (
    <div className={"container"}>
      <LinkWrap preparedPath={path}/>
      <div className={"wrapper"}>
        <Selection name="Платформа" id="platform-invest" items={platformArray} action={addPlatform} type="platform"/>
        <Selection name="Версии" id="versions-invest" items={versions} action={addPlatform} type="versions"/>
        {version && <DeeplinkWrapper/>}
        {version && deeplinkType && <ScreenWrapper/>}
        {screen && <Selection name="Тип перехода" id="sourcetype-invest" items={sourcesType} action={addPlatform} type="sourcesType"/>}
        {sourceType && <SourcesWrapper/>}
      </div>
      <QrCode/>
      <Info/>
    </div>
  )
}
