import './App.css';
import {
    Container,
} from "./components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {resetData} from "./__data__/actions/platformAction";


const AppFunc = () => {
    const [isWeb, setWeb] = useState(false)
    const [reset, setReset] = useState(true)
    const dispatch = useDispatch()
     const handleClick = (bool) => {
        setWeb(bool);
        dispatch(resetData(reset))
    }

    return (
        <>
            <button onClick={() => handleClick(false)}>Mobile</button>
            <button onClick={() => handleClick(true)}>Web</button>
            {!isWeb ?
                <Container isWeb={false}/> :
                <Container isWeb={true}/>
            }
        </>
    )
}

export default AppFunc;