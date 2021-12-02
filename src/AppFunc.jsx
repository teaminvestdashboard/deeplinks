import './App.css';
import {
    Container,
} from "./components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {resetData} from "./__data__/actions/platformAction";
import {Button} from "@mui/material";


const AppFunc = () => {
    const [isWeb, setWeb] = useState(false)
    const [reset, setReset] = useState(true)
    const dispatch = useDispatch()
     const handleClick = (bool) => {
        setWeb(bool);
        dispatch(resetData(reset))
        setReset(!reset)
    }

    return (
        <div className={"window"}>
            <div className={"button-container"}>
                <Button variant={"contained"} onClick={() => handleClick(false)}>Mobile</Button>
                <Button variant={"contained"} onClick={() => handleClick(true)}>Web</Button>
            </div>
            {!isWeb ?
                <Container isWeb={false}/> :
                <Container isWeb={true}/>
            }
        </div>
    )
}

export default AppFunc;