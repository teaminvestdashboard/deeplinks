import './App.css';
import {Link, Platform, Target} from "./components";


const AppFunc = () => {

    return (
        <div className={"container"}>
            <Link/>
            <div className={"wrapper"}>
                <Platform/>
                <Target/>
            </div>
        </div>
    )
}

export default AppFunc;