import './App.css';
import {Link, Platform} from "./components";


const AppFunc = () => {

    return (
        <div className={"container"}>
            <Link/>
            <div className={"wrapper"}>
                <Platform/>
            </div>
        </div>
    )
}

export default AppFunc;