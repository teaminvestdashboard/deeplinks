import './App.css';
import {Deeplink, ExternalSource, InternalSource, Link, Platform, Screen} from "./components";


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
        </div>
    )
}

export default AppFunc;