const Animal = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Species: {props.species}</p>
            <p>{props.emoji} </p>
            <p>{props.notUsed}</p>
        </div>
    )
}