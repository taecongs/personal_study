import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // toISOString : 모든 date 객체에 사용가능한 내장 메소드 : toISOString을 사용하여 문자열로 출력 
    // toLocaleString : 지역에 맞춘 표현방식으로 값을 변환하여 리턴한다.
    // getFullYear : 4자리로 추출하여 출력한다.


    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;