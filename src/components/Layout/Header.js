import React from 'react';
import mealsImg from '../../assets/images/meals.jpg';
import Logoimg from '../../assets/images/logo.png';
import HeaderStyles from './Header.module.css';
import CartButton from './HeaderCartButton';
const Header = () => {
    return (
        <React.Fragment>
            <header className={HeaderStyles.header}>
                <h1 className={HeaderStyles.logo}>
                    FlavorDash
                    <img src={Logoimg} alt='FlavorDash'/>
                </h1>
                <CartButton/>
            </header>

            <div className={HeaderStyles['main-image']}>
                <img src={mealsImg} alt=""/>
            </div>
        </React.Fragment>
    );
}

export default Header;