import './App.css';
import React from "react";
import {Link} from "./components";
import {useDispatch} from "react-redux";
import {addPlatform} from "./__data__/actions/platformAction";

const AppFunc = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addPlatform("web"))
    }
    return (
        <>
            <Link/>
            <button onClick={() => handleClick()}></button>
        </>
    )
}

export default AppFunc;