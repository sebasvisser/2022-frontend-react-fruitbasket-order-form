import React
    from "react";

function Product({produce, emoticon, count}) {
    return (
        <>
            <div className={"fruit-block"}>
                <span>{emoticon}</span>
                <h2>{produce}</h2>
                <button>MIN</button>
                <h3>{count}</h3>
                <button>PLUS</button>
            </div>
        </>
    );
}

export default Product;