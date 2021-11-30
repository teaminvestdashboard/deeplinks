import './App.css';
import {Deeplink, Link, Platform} from "./components";


const AppFunc = () => {

    return (
        <div className={"container"}>
            <Link/>
            <div className={"wrapper"}>
                <Platform/>
                <Deeplink/>
            </div>
        </div>
    )
}

export default AppFunc;