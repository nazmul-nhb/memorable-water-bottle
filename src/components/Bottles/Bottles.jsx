import './Bottles.css';
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocal, getStoredCart } from '../utilities/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // cart from local storage
    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [bottles])

    const addToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocal(bottle.id);
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