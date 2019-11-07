const CartItems = (state = [], action) => {


    const sendOrderToServer = (items) => {
        console.log('SEND Order to Server : ', items);
        fetch('http://sfdc-api-app.herokuapp.com/api/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(response => response.json())
            .then(result => {
                    console.log(' Response : ', result);
                    let toastMessage = '';
                    if(result.success) {
                        toastMessage = 'Order Id : ' + result.success;
                    }else{
                        toastMessage = 'Thank you for your feedback.'
                    }
                    console.log('Response : ', toastMessage);
            })
            .catch(error => {
                console.log('Error : ', error);
            })
    };

    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART', 'Item added to cart.', action.payload.name);
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            console.log('REMOVE_FROM_CART', 'Item removed from cart.');
            return state.filter(CartItem => CartItem.id !== action.payload.id);
        case 'CHECKOUT':
            console.log('CHECKOUT', action.payload);
            sendOrderToServer(action.payload);
            return [];
        default:
            break;
    }
    return state;
};

export default CartItems
