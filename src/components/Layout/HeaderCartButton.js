import {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartButtonStyles from './HeaderCartButton.module.css';
import cartContext from '../../store/cart-context';



const HeaderCartButton = (props) => {
    const headerContext = useContext(cartContext);
    const { items } = headerContext;
    const numberofCartItems = items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0);


    const [isHighlighted, setisHighlighted] = useState(false);
    const buttonBump = `${CartButtonStyles.button} ${isHighlighted ? CartButtonStyles.bump : ''}`;


    useEffect(()=> {

        if(items.length === 0){
            return;
        }
        setisHighlighted(true);
        const timer = setTimeout(() => {
            setisHighlighted(false);
        }, 300)
      
        return () => {
            clearTimeout(timer);
        };    
    }, [items]);

    return <button className={buttonBump} onClick={props.onClick}>
        <span className={CartButtonStyles.icon}><CartIcon/></span>
        <span>Your Cart</span>        
        <span className={CartButtonStyles.badge}>{numberofCartItems}</span>
    </button>
}

export default HeaderCartButton;