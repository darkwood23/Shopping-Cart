import cart from '../assets/cart.svg'
import logo from '../assets/shopping-cart-logo.jpeg' 
import { Link } from 'react-router-dom'
import '../styles/header.css'
import cartVariant from '../assets/cart-variant.svg'
import { useEffect, useState } from 'react'

function Header() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('cart-items'))
        setCartItems(storage.length)
    }, [])

    return (
        <div className="header-element-holder">
            <div className="logo-holder">
                <img src={logo} alt="logo" id='logo'/>
                <h1 id='title-name'>A-one shopping</h1>
                <Link to="shopping-cart" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="checkout-button">
                        <img src={cart} alt="checkout" id='checkout-logo' className='small-logo'/>
                        <h3 id='checkout-name' className='small-name'>Checkout</h3>
                    </div>
                </Link>
                <div className="cart">
                    <img src={cartVariant} alt="cart-variant-pic" className='small-logo'/>
                    <h2 id='cart-items'>{cartItems}</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
