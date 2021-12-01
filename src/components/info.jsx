import {useSelector} from "react-redux";

const Info = () => {
    const links = useSelector(({Links}) => Links)

    return(
        <div>
            <p>Платформа: {links.platform}</p>
            <p>Куда перейти: {links.deeplink}</p>
            <p>Экран: {links.screen}</p>
            <p>Внутренний переход: {links.internalSource}</p>
            <p>Внешний переход: {links.externalSource}</p>
        </div>
    )
}

export default Info;