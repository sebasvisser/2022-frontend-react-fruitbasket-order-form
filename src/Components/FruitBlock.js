import Product
    from "./Product";
import React
    from "react";

function FruitBlock(){
    function resetCounters() {
        setStrawberryValue(0);
        setBananaValue(0);
        setAppleValue(0);
        setKiwiValue(0);
        console.log("Alles resetten naar 0")
    }
    return (
        <>
            <Product
                produce={"Bananen"}
                emoticon="🍌"
                initialCount={0}
            />
            <Product
                produce={"aardbeien"}
                emoticon="🍓"
                initialCount={0}
            />
            <Product
                produce={"appels"}
                emoticon={"🍏"}
                initialCount={0}
            />
            <Product
                produce={"kiwi's"}
                emoticon={"🥝"}
                initialCount={0}
            />
            <div className="reset-button">
                <button onClick={resetCounters}>RESET</button>
            </div>
        </>
    )
}

export default FruitBlock;