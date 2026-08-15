function TitleMusic({name, func}) {
    return(
        <div onClick={func} className="musicOption">
            <p>{name}</p>
        </div>
    )
}

export default TitleMusic