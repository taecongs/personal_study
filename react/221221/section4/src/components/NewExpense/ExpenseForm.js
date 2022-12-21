import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    // 객체 하나로 3개의 독립적인 state가 아니라 한 개의 state처럼 관리할 수 있다.
    // const [userInput, setUserInput] = useState({
    //     enterTitle : '',
    //     enterAmount : '',
    //     enterDate : ''
    // });

    const titleChangeHandler = (e) => {
        console.log('************title', e.target.value);
        setEnterTitle(e.target.value);

        // setUserInput({
        //     // 스프레드 연산자 : 객체의 키와 값을 추출해서 새로운 객체에 추가한 것이다.
        //     ...userInput,
        //     enterTitle : e.target.value,
        // });

        // 상태 업데이트가 이전 상태에 의존하고 있다면 이 방식으로 정의해야 한다.
        // prevState : 정의된 useState({}) 객체
        // setUserInput((prevState) => {
        //     return {...prevState, enterTitle : e.target.value}; 
        // });
    }


    const amountChangeHandler = (e) => {
        console.log('************amount', e.target.value);
        setEnterAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount : e.target.value,
        // });
    }


    const dateChangeHandler = (e) => {
        console.log('************date', e.target.value);
        setEnterDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate : e.target.value,
        // });
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
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;