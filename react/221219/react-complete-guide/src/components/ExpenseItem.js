import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return(
        <div className='expense-item'>
            {/* 모든 date 객체에 사용가능한 내장 메소드 : toISOString을 사용하여 문자열로 출력 */}
            <div>{expenseDate.toISOString}</div>

            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;