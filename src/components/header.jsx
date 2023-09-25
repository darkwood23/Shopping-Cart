import cart from '../assets/cart.svg'
import logo from '../assets/shopping-cart-logo.jpeg' 
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
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
            </div>
        </div>
    )
}

export default Header
