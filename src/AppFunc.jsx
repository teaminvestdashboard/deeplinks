import './App.css';
import {
    Deeplink,
    ExternalSource,
    Form,
    Info,
    InternalSource,
    Link,
    Platform,
    QrCode,
    Reload,
    Screen
} from "./components";


const AppFunc = () => {

    return (
        <div className={"container"}>
            <Link/>
            <div className={"wrapper"}>
                <Platform/>
                <Deeplink/>
                <Screen/>
                <InternalSource/>
                <ExternalSource/>
            </div>
            <QrCode/>
            <Info/>
        </div>
    )
}

export default AppFunc;