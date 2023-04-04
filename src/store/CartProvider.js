import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const reducerD = (state, action) => {
    if(action.type === 'ADD'){
        const updateCartAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingItemIndex];

        let updatedCartItems;

        if (existingItemIndex > -1) {  
            const updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedCartItems = [...state.items]; // Copying over the old items array to find the item that was added 
            updatedCartItems[existingItemIndex] = updatedCartItem;
        }
        else {
            updatedCartItems = state.items.concat(action.item);            
        }        

        return {
            items: updatedCartItems,
            totalAmount: updateCartAmount
        }
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updateCartAmount = state.totalAmount - existingCartItem.price;
    
        let updatedCartItems;

        if (existingCartItem.amount === 1) {
            updatedCartItems = state.items.filter(item => item.id !== action.id );
        }
        else {
            const updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        }


        return {
            items: updatedCartItems,
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