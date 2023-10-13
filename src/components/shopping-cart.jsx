import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import "../styles/shopping-cart.css"
import Popup from "reactjs-popup"

function Shopping() {
    const [items, setItems] = useState([])
    const [disabled, setDisabled] = useState()
    const [totalPrice, setTotalPrice] = useState(0)

    const location = useLocation()
    if(location.state !== null) {
        const data = location.state
        useEffect(() => {
            setItems((item) => [...item, data])
        }, [data])
    } else if (localStorage.getItem("cart-items") !== null) {
        useEffect(() => {
            const cartItems = () => JSON.parse(localStorage.getItem("cart-items"))
            setItems(cartItems)
        }, [localStorage.getItem("cart-items")])
    }

    useEffect(() => {
        let total = 0
        items?.map((item) => {
            total += Number(item.total)
        })
        setTotalPrice(total)
    }, [items])


    const deleteFunc = (delIndex) => {
        let array = [...items]
        if (delIndex !== -1) {
            array.splice(delIndex, 1)
            setItems(array)
        }
        
        const cartItems = JSON.parse(localStorage.getItem("cart-items"))
        cartItems.splice(delIndex, 1)
        localStorage.setItem("cart-items", JSON.stringify(cartItems))
    }

    useEffect(() => {
        if(items.length === 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [items.length === 0])

    const deleteStorage = () => {
        localStorage.clear()
        
    }

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
                            <td className="image-normal"><img src={product?.image} alt="" className="table-image"/></td>
                            <td className="item-normal">{product?.item}</td>
                            <td className="quantity-normal">{product?.quantity}</td>
                            <td className="price-per-normal">${product?.pricePer}</td>
                            <td className="total-normal">${product?.total}</td>
                            <td className="action-normal"><button className="delete-item-button" onClick={() => deleteFunc(index)}>Delete Item</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total-price">
                <h2>Total Price:</h2>
                <h2>{totalPrice}</h2>
            </div>
            <Popup trigger={
                <button className="checkout-btn" id="checkout-button" disabled={disabled} onClick={deleteStorage}>Checkout</button>
            }
            modal nested>
                {
                    close => (
                        <div className="popup">
                            <h1>Thank You For Shopping With Us!</h1>
                            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}} ><p onClick={deleteStorage}>Go back to home page</p></Link>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default Shopping