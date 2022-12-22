import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expense.css';

import ExpenseFilter from './ExpenseFilter';



const Expense = (props) => {
    const [yearData, setYearData] = useState('2022');

    const onFilterData = (yData) => {
        setYearData(yData);
    }

    // expenseYear : 현재 배열의 요소
    const filteredExpense = props.item.filter(expenseYear => {
        // getFullYear : 년도 4자리 추출 -> toString : 문자열 변환
        return expenseYear.date.getFullYear().toString() === yearData;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={yearData} onFilterData={onFilterData} />

                {filteredExpense.length === 0 && <p>No expense found.</p>}

                {filteredExpense.length > 0 && filteredExpense.map((data) =>
                    <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />
                )}
            </Card>
        </div>
    );
}

export default Expense;