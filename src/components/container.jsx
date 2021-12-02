import {Deeplink, ExternalSource, Info, InternalSource, LinkWrap, Platform, QrCode, Screen} from "./index";

const Container = ({isWeb}) => {
    return(
        <div className={"container"}>
            <LinkWrap/>
            <div className={"wrapper"}>
                <Platform isWeb={isWeb}/>
                <Deeplink isWeb={isWeb}/>
                <Screen isWeb={isWeb}/>
                <InternalSource isWeb={isWeb}/>
                <ExternalSource isWeb={isWeb}/>
            </div>
            <QrCode/>
            <Info/>
        </div>
    )
}

export default Container;