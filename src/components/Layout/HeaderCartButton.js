import CartIcon from '../Cart/CartIcon';
import CartButtonStyles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return <button className={CartButtonStyles.button}>
        <span className={CartButtonStyles.icon}><CartIcon/></span>
        <span>Your Cart</span>        
        <span className={CartButtonStyles.badge}>3</span>
    </button>
}

export default HeaderCartButton;