import React from 'react'
import { useSelector } from 'react-redux'
import { versions } from '../../__data__/db/investments'
import { Selection } from './select'

export const VersionWrapper = () => {
  const { version, platformName } = useSelector(({ investments }) => investments)

  const items = versions.filter((item) => item.platforms.includes(platformName))

  return (
    <Selection name="Версии" id="versions-invest" items={items} type="versions" initValue={version}/>
  )
}
