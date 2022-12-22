import { useState } from 'react';


import Card from '../UI/Card';
import '../Expenses/Expense.css';

import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

import ExpenseChart from './ExpenseChart';



const Expense = (props) => {
    const [yearData, setYearData] = useState('2022');

    const onFilterData = (yData) => {
        setYearData(yData);
    }

    /* 날짜별 카테고리 별로 보기 위해 사전 정의 */
    // expenseYear : 현재 배열의 요소
    const filteredExpense = props.item.filter(expenseYear => {
        // getFullYear : 년도 4자리 추출 -> toString : 문자열 변환
        return expenseYear.date.getFullYear().toString() === yearData;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={yearData} onFilterData={onFilterData} />

                <ExpenseChart expense={filteredExpense} />

                {/* ExpenseList에서 사용하고 있는 props.item으로 전달한다.  */}
                <ExpenseList item={filteredExpense} />
            </Card>
        </div>
    );
}

export default Expense;