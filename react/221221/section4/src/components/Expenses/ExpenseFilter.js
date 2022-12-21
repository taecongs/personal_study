import React, { useState } from 'react';

import '../Expenses/ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const yearChangeHandler = (e) => {
        // console.log(e.target.value);
        props.onFilterData(e.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;