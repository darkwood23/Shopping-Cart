import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import "../styles/shopping-cart.css"
import Popup from "reactjs-popup"

function Shopping(props) {
    const [items, setItems] = useState([])

    const location = useLocation()
    const data = location.state
    useEffect(() => {
        setItems((item) => [...item, data])
    }, [data])
    
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
                        <th className="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((product, index) => (
                        <tr key={index}>
                            <td className="sn-normal">{index + 1}</td>
                            <td className="image-normal"><img src={product.image} alt="" className="table-image"/></td>
                            <td className="item-normal">{product.item}</td>
                            <td className="quantity-normal">{product.quantity}</td>
                            <td className="price-per-normal">${product.pricePer}</td>
                            <td className="total-normal">${product.total}</td>
                            <td className="action-normal"><button className="delete-item-button">Delete Item</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Popup trigger={
                <button className="checkout-btn">Checkout</button>
            }
            modal nested>
                {
                    close => (
                        <div className="popup">
                            <h1>Thank You For Shopping With Us!</h1>
                            <Link to="/" onClick={() => close()} style={{textDecoration: 'none', color: 'inherit'}}><p>Go back to home page</p></Link>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default Shopping