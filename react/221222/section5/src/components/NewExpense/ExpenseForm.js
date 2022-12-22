import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (e) => {
        // console.log('************title', e.target.value);
        setEnterTitle(e.target.value);
    }


    const amountChangeHandler = (e) => {
        // console.log('************amount', e.target.value);
        setEnterAmount(e.target.value);
    }


    const dateChangeHandler = (e) => {
        // console.log('************date', e.target.value);
        setEnterDate(e.target.value);
    }


    // 페이지가 새로고침되는 이유는?
    // 브라우저는 폼이 제출될 때마다 웹 페이지를 호스팅하고 있는 서버에 요청을 보내기 때문이다.
    const submitHandler = (e) => {
        // 새로고침을 막아주는 기본 자바스크립트 메서드이다.
        e.preventDefault();

        const expenseData = {
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        // 버튼 클릭 시 초기화 
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enterAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2022-01-01' max='2025-12-31' value={enterDate} onChange={dateChangeHandler}  />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;