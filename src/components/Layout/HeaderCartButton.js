import {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartButtonStyles from './HeaderCartButton.module.css';
import cartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
    const headerContext = useContext(cartContext);
    const numberofCartItems = headerContext.items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0);
    return <button className={CartButtonStyles.button} onClick={props.onClick}>
        <span className={CartButtonStyles.icon}><CartIcon/></span>
        <span>Your Cart</span>        
        <span className={CartButtonStyles.badge}>{numberofCartItems}</span>
    </button>
}

export default HeaderCartButton;