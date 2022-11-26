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
                count={0}
            />
            <Product
                produce={"aardbeien"}
                emoticon="🍓"
                count={0}
            />
            <Product
                produce={"appels"}
                emoticon={"🍏"}
                count={0}
            />
            <Product
                produce={"kiwi's"}
                emoticon={"🥝"}
                count={0}
            />
        </>
    )
}

export default FruitBlock;