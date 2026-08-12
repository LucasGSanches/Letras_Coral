function TitleMusic({name, func}) {
    return(
        <div onClick={func}>
            <p>{name}</p>
        </div>
    )
}

export default TitleMusic