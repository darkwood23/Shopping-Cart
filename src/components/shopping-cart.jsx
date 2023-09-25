import { useState } from "react"

function Shopping(props) {
    const [products, setProducts] = useState([])

    // setProducts((product) => [...product, props.product])
    return (
        <div className="shopping-cart">
            <h1 className="head">Checkout</h1>
            <table className="details">
                <thead>
                    <tr className="details-head">
                        <th className="sn">S.N.</th>
                        <th className="image">Image</th>
                        <th className="item">Item</th>
                        <th className="quantity">Quantity</th>
                        <th className="price-per">Price Per Each</th>
                        <th className="total-price">Total Price</th>
                    </tr>
                </thead>
                {/* {products?.map((product, index) => (
                    <tr>
                        <td className="sn-normal">{index}</td>
                        <td className="image-normal">{product.image}</td>
                        <td className="item-normal">{product.item}</td>
                        <td className="quantity-normal">{product.quantity}</td>
                        <td className="price-per-normal">{product.pricePer}</td>
                        <td className="total-normal">{product.total}</td>
                    </tr>
                ))} */}
            </table>
            <button className="checkout-btn">Checkout</button>
        </div>
    )
}

export default Shopping