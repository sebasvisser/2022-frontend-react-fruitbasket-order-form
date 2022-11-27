import React
    , {
    useState
} from "react";

function Product({produce, emoticon, initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            <div className={"fruit-block"}>
                <span>{emoticon}</span>
                <h2>{produce}</h2>
                <button onClick={() => count === 0 ? setCount(count) : setCount(count - 1)}>MIN</button>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}>PLUS</button>
            </div>
        </>
    );
}

export default Product;