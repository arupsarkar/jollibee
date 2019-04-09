const CartItems = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART', 'Item added to cart.', action.payload.name);
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            console.log('REMOVE_FROM_CART', 'Item removed from cart.');
            return state.filter(CartItem => CartItem.id !== action.payload.id);
        default:
            break;
    }
    return state;
};

export default CartItems
