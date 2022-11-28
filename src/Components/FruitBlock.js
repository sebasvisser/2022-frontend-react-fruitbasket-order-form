import Product
    from "./Product";
import React
    , {
    useState
} from "react";

function FruitBlock(){
    //global state voor alle counters als beginpunt (+ voor reset)
    const [initialCount, setInitialCount] = useState(0);


    const forceUpdate = React.useCallback(() => setInitialCount(0), []);

    function resetCounters() {
        setInitialCount(1);
        setInitialCount(0);
        console.log("Alles resetten naar 0")
    }
    return (
        <>
            <Product
                produce={"Bananen"}
                emoticon="🍌"
                initialCount={initialCount}
            />
            <Product
                produce={"aardbeien"}
                emoticon="🍓"
                initialCount={initialCount}
            />
            <Product
                produce={"appels"}
                emoticon={"🍏"}
                initialCount={initialCount}
            />
            <Product
                produce={"kiwi's"}
                emoticon={"🥝"}
                initialCount={initialCount}
            />
            <div className="reset-button">
                <button onClick={forceUpdate}>RESET</button>
            </div>
        </>
    )
}

export default FruitBlock;