import { ADD_TO_CART, REMOVE_FROM_CART } from 'academy/constant/Cart/CartAction';

const initialStateCart = {
    itemCarts : JSON.parse(localStorage.getItem('cartItems')) || [],
    totalCount : JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')).length : 0
};


const CartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if(localStorage.getItem('authToken')){
                let  itemCarts = [...state.itemCarts , action.payload ];
                localStorage.setItem('cartItems', JSON.stringify(itemCarts));
                return {
                    ...state,
                    itemCarts : itemCarts,
                    totalCount: state.totalCount + 1,
                };
            }else{
                window.location.href = '/login'
                return;
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                itemCarts: [...state.itemCarts , action.payload ],
                totalCount: state.totalCount + 1,
            };
        default:
            return state;
    }
};

export default CartReducer;