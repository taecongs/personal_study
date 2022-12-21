import './Card.css';

// 재사용 할 수 있는 Wrapper 컴포넌트이다.
const Card = (props) => {
    // className이 문자열로 추가된다.
    const classes = 'card ' + props.className;

    return(
        <div className={classes}>
            {/* children : 예약어 */}
            {/* props.children이 가르키는 것은 ExpenseItem 에서 <Card> ~~~~ </Card> 이다. */}
            {props.children}
        </div>
    );
}

export default Card;