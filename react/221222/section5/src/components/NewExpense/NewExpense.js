import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    // enterExpenseData : ExpenseFrom.js 에서  const expenseData = {} 객체 형식을 정의한다.
    const SaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id : Math.random().toString()
        };

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    // 버튼을 클릭하면 false 에서 true로 바뀐다.
    const startEditHandler = () => {
        setIsEditing(true);
    }

    const stopEditHander = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}
            
            {/* Add New Expense 버튼을 클릭 시 false -> true 가 된다. true 라면 폼 형식이 화면에 보여지게 된다. */}
            {/* onCancel={stopEditHander}는 ExpenseForm으로 setIsEditing(false) 값을 전달한다. */}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditHander} />}
        </div>
    );
}

export default NewExpense;