import React from 'react'
import { useSelector } from 'react-redux'
import { versions } from '../../__data__/db/investments'
import { Selection } from './select'

export const VersionWrapper = () => {
  const { version } = useSelector(({ investments }) => investments)

  return (
    <Selection name="Версии" id="versions-invest" items={versions} type="versions" initValue={version}/>
  )
}
