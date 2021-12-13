const App = () => {
    return (
        <div>
            <Animal 
                name="fluffy" 
                species="porcupine" 
                emoji="\|/" 
                notUsed="" />
            <Animal 
                name="Bob" 
                species="cat" 
                emoji=":)" />
            <RandomChoice choices= {['red','green','yellow']} />
            <Griffin 
                isFriendly={true} 
                obj={{name:"Griffin", age:15, color:"tan"}}/>
            <SharPei />
            <Shiba />
        </div>
    ) 
}
ReactDOM.render(<App />, document.getElementById('root'));