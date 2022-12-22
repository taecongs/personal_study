import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    return (
        <div>
            {/* 카테고리에 내용이 없다면? 0보다 작기 때문에 조건 성립 */}
            {props.item.length === 0 && <p>No expense found.</p>}

            {/* 카테고리에 내용이 있다면? 0보다 크기 때문에 조건 성립 */}
            {props.item.length > 0 && props.item.map((data) =>
                <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />
            )}
        </div>
    );
}

export default ExpenseList;