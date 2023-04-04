
import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {
    const Cartctx = useContext(CartContext);

    const onAddHandler = (item) => {
        Cartctx.addItem( {
            ...item,
            amount: 1
        });
    }

    const onRemoveHandler = (id) => {
        Cartctx.removeItem( {
            id,
            amount: -1
        });
    }



    const cartItems = <ul className={classes['cart-items']}>{ Cartctx.items.map(item => 
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onAdd={onAddHandler.bind(null, item)} 
            onRemove={onRemoveHandler.bind(null, item.id)}

        />
    )}</ul>;
    const totalAmount = `$${Cartctx.totalAmount.toFixed(2)}`; 
    const hasItems = Cartctx.items.length > 0;
    return (
        <Modal closeHandler={props.cartCloseHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
             
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.cartCloseHandler}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    ) 
}

export default Cart;