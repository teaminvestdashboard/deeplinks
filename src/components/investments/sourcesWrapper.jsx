import React from 'react'
import { useSelector } from 'react-redux'
import { EXTERNAL, INTERNAL } from '../../constants'
import { addDeeplink } from '../../__data__/actions/deeplinkAction'
import { sources } from '../../__data__/investments'
import { Selection } from './select'

export const SourcesWrapper = () => {
  const sourcesTypeState = useSelector(({ investments }) => investments.sourceType)

  const items = sourcesTypeState === INTERNAL ? sources[INTERNAL] : sources[EXTERNAL]

  return (
    <Selection name="Переход из" id="sources-invest" items={items} action={addDeeplink} type="sources"/>
  )
}
