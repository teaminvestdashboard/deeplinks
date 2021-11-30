import './App.css';
import {Deeplink, Link, Platform, Screen} from "./components";


const AppFunc = () => {

    return (
        <div className={"container"}>
            <Link/>
            <div className={"wrapper"}>
                <Platform/>
                <Deeplink/>
                <Screen/>
            </div>
        </div>
    )
}

export default AppFunc;