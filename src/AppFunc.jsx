import './App.css';
import {Deeplink, ExternalSource, InternalSource, Link, Platform, QrCode, Screen} from "./components";


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
        </div>
    )
}

export default AppFunc;