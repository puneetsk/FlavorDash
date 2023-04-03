import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const reducerD = (state, action) => {
    if(action.type === 'ADD'){
        const updateCartItem = state.items.concat(action.item);
        const updateCartAmount = state.totalAmount + action.item.price * action.item.totalAmount;

        return {
            items: updateCartItem,
            totalAmount: updateCartAmount
        }
    }

    return defaultCartState;
}



const CartProvider = (props) => {
    const [state, dispatch] = useReducer(reducerD, defaultCartState);

    const addItemHandler = (item) => {
        dispatch({type: 'ADD', item: item});
    }

    const removeItemHandler = (id) => {
        dispatch({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem:addItemHandler,
        removeItem: removeItemHandler 
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;