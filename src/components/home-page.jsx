import { useState, useEffect } from "react"
import "../styles/home-page.css"
import Item from "./item"
import Popup from "reactjs-popup"

function Home() {
    const [items, setItems] = useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => setItems(response))
    }, [])

    return (
        <div className="home-page">
            {items?.map((item, index) => {
                return (
                    <div className="all-elements" key={index}>
                        <Popup trigger={
                            <div className="item-holder" key={index} >
                                <img src={item.image} alt="item" className="item-image"/>
                                <h2 className="item-title">{item.title}</h2>
                                <h3 className="item-price">${item.price}</h3>
                            </div>
                        }
                        modal nested>
                            {
                                close => (
                                    <>
                                        <Item id={item.id} image={item.image} title={item.title} details={item.description} price={item.price} click={() => close()} />
                                    </>
                                )
                                
                            }
                        </Popup>
                    </div>
                )
            })}
        </div>
    )
}

export default Home