### 📚 2022-12-22 (Section 5 : 68 ~ 82)

✅ 스프레드 연산자란?<br/>
- 객체의 키와 값을 추출해서 새로운 객체에 추가한 것이다.

✅ map() 함수란?<br/>
- 배열 객체의 내장 함수이다.
- 파라미터로 전달된 함수를 사용해 배열 내 각 요소를 원하는 규칙에 따라 변환한다.
- **그 결과로 새로운 배열을 생성한다.**
- JSX 외부에서는 .map(() => {}); 정의
- 컴포넌트 내부에서는 .map((매개변수) => ()); 정의

✅ map 사용하여 배열을 생성했을 때 key를 설정해야 하는 이유는?<br/>
- 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용한다.

✅ filter() 함수란?<br/>
- **배열의 특정 항목을 지울 때** 사용한다.
- 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있다.
- 조건에 맞는 요소들을 모아 **새로운 배열로 반환하는 함수**이다.
- .filter(매개변수 => {});
- Expense.js 참고
