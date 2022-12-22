import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    // enterExpenseData : ExpenseFrom.js 에서  const expenseData = {} 객체 형식을 정의한다.
    const SaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id : Math.random().toString()
        };

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;