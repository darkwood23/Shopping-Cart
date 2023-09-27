import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"

import "../styles/home-page.css"

import { useState } from "react"
import { Link } from "react-router-dom"

function Item(props) {
    const [amount, setAmount] = useState(1)

    const increment = () => {
        setAmount((am) => am + 1)
    }
    
    const decrement = () => {
        setAmount((am) => am - 1)
        if(amount <= 1) {
            setAmount((am) => am + 1)
        }
    }

    const changeVal = (e) => {
        const {value} = e.target
        setAmount(value)
    }

    const data = {
        image: props.image,
        title: props.title,
        price: props.price,
        quantity: amount,
        pricePer: props.price,
        total: Number(props.price) * Number(amount)
    }

    return (
        <div className="item-buy" id={props.id}>
            <img src={props.image} alt={props.title} className="item-image"/>
            <div className="details">
                <h1 className="item-name">{props.title}</h1>
                <p className="item-details">{props.details}</p>
                <h3 className="item-price">${props.price}</h3>
                <div className="buy">
                    <img src={minus} alt="decrement" className="decrement mini-icon" onClick={decrement}/>
                    <input type="number" className="amount" value={amount} onChange={changeVal}/>
                    <img src={plus} alt="increment" className="increment mini-icon" onClick={increment}/>
                </div>
                <div className="buttons">
                    <Link to="/shopping-cart" state={data}>
                        <button type="button" className="buy-now buy-buttons">Buy Now</button>
                    </Link>
                    <button className="add-to-cart buy-buttons" onClick={props.click}>Add to cart</button>
                </div>
                <button className="close-button" onClick={props.click}>Cancel</button>
            </div>
        </div>
    )
}

export default Item