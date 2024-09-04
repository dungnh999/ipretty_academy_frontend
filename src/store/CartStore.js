import { createStore } from 'redux';
import { combineReducers } from 'redux';
import CartReducer from 'academy/reducers/CartReducer';

const rootReducer = combineReducers({
    cart: CartReducer,
});

const CartStore = createStore(rootReducer);

export default CartStore;