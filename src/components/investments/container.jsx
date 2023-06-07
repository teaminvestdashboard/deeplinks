
import React from 'react'
import LinkWrap from '../link'
import { QrCode } from './qr'
import { Selection } from './select'
import { platform as platformArray, sourcesType } from '../../__data__/investments'
import { ScreenWrapper } from './screenWrapper'
import { useSelector } from 'react-redux'
import { DeeplinkWrapper } from './deeplinkWrapper'
import { SourcesWrapper } from './sourcesWrapper'
import { Stack } from '@mui/material'
import { Info } from './info'
import { VersionWrapper } from './versionWrapper'

export const Container = () => {
  const { platform, version, deeplinkType, deeplink, screen, sourceType, source, link} = useSelector(({investments}) => investments)

  const path = `${platform.path || ''}${screen.path || ''}${source.code || ''}`

  const info = [
    {
      title: "Платформа",
      value: platform.path
    },
    {
      title: "Куда перейти",
      value: deeplink.title
    },
    {
      title: "Экран",
      value: screen.path
    },
    {
      title: "Переход",
      value: source.code
    },
  ]

  return (
    <div className="container">
      <LinkWrap preparedPath={path}/>
      <div className="investments-wrapper">
        <Stack spacing={2} direction="row" width="100%" marginBottom="20px">
          <Selection name="Платформа" id="platform-invest" items={platformArray} type="platform"/>
          {platform && <VersionWrapper/>}
          {platform && version.name && <DeeplinkWrapper/>}
          {version.name && deeplinkType && <ScreenWrapper/>}
        </Stack>
        <Stack spacing={2} direction="row">
          {screen.path && <Selection name="Тип перехода" id="sourcetype-invest" items={sourcesType} type="sourcesType"/>}
          {sourceType && <SourcesWrapper/>}
        </Stack>
      </div>
      <QrCode path={link}/>
      <Info info={info}/>
    </div>
  )
}
