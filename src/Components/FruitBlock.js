import Product
    from "./Product";
import React
    from "react";

function FruitBlock(){
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
        </>
    )
}

export default FruitBlock;