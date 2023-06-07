import { useSelector } from 'react-redux';
import { addLink } from '../../__data__/actions/portfolio/linkAction';
import {Deeplink, ExternalSource, Info, InternalSource, Platform, Screen} from './index'
import { QrCode } from '../qr'
import { LinkWrap } from '../link'

const Container = () => {
  const links = useSelector(({ Links }) => Links);
  const path = `${links.platform}${links.screen}${links.internalSource}${links.externalSource}`
  return(
    <div className={"container"}>
      <LinkWrap preparedPath={path} action={addLink}/>
      <div className={"wrapper"}>
        <Platform />
        <Deeplink />
        <Screen/>
        <InternalSource/>
        <ExternalSource/>
      </div>
      <QrCode path={path}/>
      <Info/>
    </div>
  )
}

export default Container;
