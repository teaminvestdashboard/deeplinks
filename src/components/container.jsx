import {Deeplink, ExternalSource, Info, InternalSource, LinkWrap, Platform, QrCode, Screen} from './index'

const Container = () => {
  return(
    <div className={"container"}>
      <LinkWrap/>
      <div className={"wrapper"}>
        <Platform />
        <Deeplink />
        <Screen/>
        <InternalSource/>
        <ExternalSource/>
      </div>
      <QrCode/>
      <Info/>
    </div>
  )
}

export default Container;
