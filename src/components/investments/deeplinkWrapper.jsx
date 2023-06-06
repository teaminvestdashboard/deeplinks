import React from 'react'
import { useSelector } from 'react-redux'
import { addDeeplink } from '../../__data__/actions/deeplinkAction'
import { deeplink } from '../../__data__/investments'
import { compareVersions } from '../utils'
import { Selection } from './select'

export const DeeplinkWrapper = () => {
  const version = useSelector(({ investments }) => investments.version)

  const filteredByVersion = deeplink?.filter((item) => compareVersions(item.availableVersion, version))

  return (
    <Selection name="Куда перейди" id="deeplink-invest" items={filteredByVersion} action={addDeeplink} type="deeplink"/>
  )
}
