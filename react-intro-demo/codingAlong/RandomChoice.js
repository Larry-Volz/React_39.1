const RandomChoice = (props) => {
    const idx = Math.floor(Math.random() * props.choices.length);
    console.log(`idx is: ${idx}`)
    // props.choices[idx]=1000;
    let choice = props.choices[idx];
    // choice = 1000;
    return <h4>Random Choice is: {choice} </h4>
}





