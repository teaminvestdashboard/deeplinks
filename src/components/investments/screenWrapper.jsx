import React from 'react'
import { useSelector } from 'react-redux'
import { screen } from '../../__data__/investments'
import { compareVersions } from '../utils'
import { Selection } from './select'

export const ScreenWrapper = () => {
  const deeplinkType = useSelector(({ investments }) => investments.deeplinkType)
  const version = useSelector(({ investments }) => investments.version)

  const items = screen.find((item) => item.code === deeplinkType)?.screens
  const filteredByVersion = items?.filter((item) => compareVersions(item.availableVersion, version))

  return (
    <Selection name="Экран" id="screen-invest" items={filteredByVersion} type="screen"/>
  )
}
