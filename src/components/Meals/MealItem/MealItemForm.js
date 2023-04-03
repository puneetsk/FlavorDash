import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {

    const refInput = useRef();
    const [amountValid, setamountValid] = useState(true);
    
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const EnteredAmount = refInput.current.value;
        const enteredNumber = +EnteredAmount;
    
        if( EnteredAmount.trim().length === 0 || enteredNumber < 1 || enteredNumber > 5) {
            setamountValid(false);
            return;
        }

        setamountValid(true);
        props.onAddtoCart(enteredNumber)
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input label="Amount" input = { { 
                ref: {refInput},
                id: 'amount' + props.id, 
                type: 'number', 
                min: '1', 
                max: '5', 
                step: '1', 
                defaultValue: '1',
                }}/>
            <button type='submit'>+ Add</button>
            {!amountValid && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealItemForm;