import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt={bottle.name} />
                    <p>{bottle.name}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Cart;