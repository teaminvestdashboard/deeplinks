import React from 'react'
import { useSelector } from 'react-redux'
import { EXTERNAL, INTERNAL } from '../../constants'
import { sources, sourcesWeb } from '../../__data__/db/investments'
import { Selection } from './select'

export const SourcesWrapper = () => {
  const { sourceType, platformName, source } = useSelector(({ investments }) => investments)

  const elements = platformName === "web" ? sourcesWeb : sources

  const items = sourceType === INTERNAL ? elements[INTERNAL] : elements[EXTERNAL]

  return (
    <Selection name="Переход из" id="sources-invest" items={items} type="sources" initValue={source}/>
  )
}
