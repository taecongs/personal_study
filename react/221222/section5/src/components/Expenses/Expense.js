import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expense.css';

import ExpenseFilter from './ExpenseFilter';



const Expense = (props) => {
    const [yearData, setYearData] = useState('2022');

    const onFilterData = (data) => {
        setYearData(data);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={yearData} onFilterData={onFilterData} />

                {props.item.map((data) => 
                    <ExpenseItem title={data.title} amount={data.amount} date={data.date} />
                )};

                {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
                <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
                <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
                <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} /> */}
            </Card>
        </div>
    );
}

export default Expense;