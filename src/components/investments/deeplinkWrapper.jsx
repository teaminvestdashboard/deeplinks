import React from 'react'
import { useSelector } from 'react-redux'
import { deeplink as deeplinkArray } from '../../__data__/investments'
import { compareVersions } from '../utils'
import { Selection } from './select'

export const DeeplinkWrapper = () => {
  const { version, platformName, deeplink } = useSelector(({ investments }) => investments)
  const items = deeplinkArray.filter((item) => item.platforms.includes(platformName))

  const filteredByVersion = items?.filter((item) => compareVersions(item.availableVersion, version.name))

  return (
    <Selection name="Куда перейди" id="deeplink-invest" items={filteredByVersion} type="deeplink" initValue={deeplink}/>
  )
}
