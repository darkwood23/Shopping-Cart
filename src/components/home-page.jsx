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

    const show = (id) => {
        document.getElementById(id).classList.add("show")
        let itemsHolder = document.querySelectorAll("[item-holder]")
        itemsHolder.forEach(item => {
            item.classList.add("unshow")
        })
    }

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
                                <p className="item-description">{item.description}</p>
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