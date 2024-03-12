import PropTypes from 'prop-types';
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

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired 
}

export default Bottle;