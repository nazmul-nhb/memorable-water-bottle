import './Bottles.css';
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const addToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            <div className="bottles-container">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            addToCart={addToCart}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;