import React from 'react'
import { useSelector } from 'react-redux'
import { screen as screenArray, screenWeb } from '../../__data__/db/investments'
import { compareVersionsFromAndTo } from '../utils'
import { Selection } from './select'

export const ScreenWrapper = () => {
  const { deeplinkType, version, platformName, screen } = useSelector(({ investments }) => investments)

  const elements = platformName === "web" ? screenWeb : screenArray

  const items = elements.find((item) => item.code === deeplinkType)?.screens
  const filteredByVersion = items?.filter((item) => compareVersionsFromAndTo(item.availableVersionFrom, item.availableVersionTo, version.name))


  return (
    <Selection name="Экран" id="screen-invest" items={filteredByVersion} type="screen" initValue={screen}/>
  )
}
