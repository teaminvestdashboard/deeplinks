import React from 'react'
import { useSelector } from 'react-redux'
import { screen, screenWeb } from '../../__data__/investments'
import { compareVersions } from '../utils'
import { Selection } from './select'

export const ScreenWrapper = () => {
  const { deeplinkType, version, platformName } = useSelector(({ investments }) => investments)

  const elements = platformName === "web" ? screenWeb : screen

  const items = elements.find((item) => item.code === deeplinkType)?.screens
  const filteredByVersion = items?.filter((item) => compareVersions(item.availableVersion, version))

  return (
    <Selection name="Экран" id="screen-invest" items={filteredByVersion} type="screen"/>
  )
}
