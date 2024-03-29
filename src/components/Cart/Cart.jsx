import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.id}>
                    <p><button onClick={() => removeFromCart(bottle.id)}>Remove</button> </p>
                    <img src={bottle.img} alt={bottle.name} />
                    <p>{bottle.name}</p>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;