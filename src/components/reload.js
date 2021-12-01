const Reload = () => {
    return(
        <div>
        <p>Перед изменением "Платформы", "Куда перейти" и "Экран", следует перезагрузить страницу</p>
            <button onClick={() => window.location.reload()}>ПЕРЕЗАГРУЗИТЬ</button>
        </div>
    )
}

export default Reload;