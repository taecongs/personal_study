### 📚 2022-12-21 (Section 4 : 49 ~ )

✅ State를 사용하는 이유는?<br/>

- 만약 변화하는 데이터를 갖고 있는데 그 변화하는 데이터가 사용자 인터페이스에 반영되어야 한다면 state 또는 useState가 필요하다. 왜냐하면 **일반적인 변수는 수행하지 않지만 state를 사용하면 값을 설정하고 변경할 수 있기 때문이다.** state를 사용해 값이 변한다면 **리액트는 그 state가 등록된 컴포넌트를 재평가 하게 되어 화면에 보여지게 된다.**
- 오직 state를 사용하여 변경된 컴포넌트만 재평가한다.

✅ 왜 상수(const)를 사용하는지?<br/>

- useState로 상태가 업데이트 될때, **state값이 변경되는 것이 아니라 재렌더링이 일어나게 되고** state는 **항상 최신 상태의 값을 사용하기 때문**이다.
- useState는 상태관리를 위해 클로저를 통해 해결한다.

✅ 클로저란?<br/>

- 내부 함수에서 상위 함수 스코프의 변수에 접근할 수 있는 개념이다.
- 자신이 선언될 당시의 환경을 기억하는 함수이며, 상태를 안전하게 변경하고 유지하기 위해 사용한다.

✅ state는 여러 가지 방법으로 업데이트 될수 있다?<br/>

```javascript
// 기본 방식
const [enterTitle, setEnterTitle] = useState("");

const titleChangeHandler = (e) => {
  setEnterTitle(e.target.value);
};

// onChange={} 를 사용하여 이벤트 정의
<input type='text' onChange={titleChangeHandler} />
```

```javascript
// 객체 하나로 독립적인 state가 아니라 한 개의 state처럼 관리할 수 있다.
const [userInput, setUserInput] = useState({
    enterTitle : ''
});

// 상태 업데이트가 이전 상태에 의존하고 있다면 이 방식으로 정의해야 한다.
// prevState : 정의된 useState({}) 객체
setUserInput((prevState) => {
    return {...prevState, enterTitle : e.target.value}; 
});

// onChange={} 를 사용하여 이벤트 정의
<input type='text' onChange={titleChangeHandler} />
```

✅ ㅇ?<br/>
-