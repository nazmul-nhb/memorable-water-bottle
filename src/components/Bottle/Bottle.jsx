import './Bottle.css'

const Bottle = ({ bottle, addToCart }) => {
    const { name, img, price } = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;