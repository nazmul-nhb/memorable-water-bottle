import './Bottles.css';
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocal, getStoredCart, removeFromLocal } from '../utilities/localStorage';
import Cart from '../Cart/Cart';

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
        if (bottles.length > 0) {
            const storedCart = getStoredCart();

            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart)
        }
    }, [bottles])

    const addToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocal(bottle.id);
    }

    const removeFromCart = id => {
        // remove from UI
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from local storage
        removeFromLocal(id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
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