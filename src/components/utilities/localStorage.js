const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const addToLocal = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLocal(cart);
}

const saveCartToLocal = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

export { addToLocal, getStoredCart };