import React from 'react'
import { useSelector } from 'react-redux'
import { deeplink } from '../../__data__/investments'
import { compareVersions } from '../utils'
import { Selection } from './select'

export const DeeplinkWrapper = () => {
  const { version, platformName } = useSelector(({ investments }) => investments)
  const items = deeplink.filter((item) => item.platforms.includes(platformName))
  const filteredByVersion = items?.filter((item) => compareVersions(item.availableVersion, version))

  return (
    <Selection name="Куда перейди" id="deeplink-invest" items={filteredByVersion} type="deeplink"/>
  )
}
