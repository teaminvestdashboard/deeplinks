
import React from 'react'
import Info from '../info'
import LinkWrap from '../link'
import QrCode from '../qr'
import { Selection } from './select'
import { platform as platformArray, sourcesType, versions } from '../../__data__/investments'
import { ScreenWrapper } from './screenWrapper'
import { useSelector } from 'react-redux'
import { DeeplinkWrapper } from './deeplinkWrapper'
import { SourcesWrapper } from './sourcesWrapper'
import { Stack } from '@mui/material'

export const Container = () => {
  const { platform, version, deeplinkType, screen, sourceType, source} = useSelector(({investments}) => investments)

  const path = `${platform}${screen}${source}`

  return (
    <div className="container">
      <LinkWrap preparedPath={path}/>
      <div className="investments-wrapper">
        <Stack spacing={2} direction="row" width="100%" marginBottom="20px">
          <Selection name="Платформа" id="platform-invest" items={platformArray} type="platform"/>
          {platform && <Selection name="Версии" id="versions-invest" items={versions} type="versions"/>}
          {platform && version && <DeeplinkWrapper/>}
          {version && deeplinkType && <ScreenWrapper/>}
        </Stack>
        <Stack spacing={2} direction="row">
          {screen && <Selection name="Тип перехода" id="sourcetype-invest" items={sourcesType} type="sourcesType"/>}
          {sourceType && <SourcesWrapper/>}
        </Stack>
      </div>
      <QrCode/>
      <Info/>
    </div>
  )
}
