import { useState } from "react";
import Expense from "./components/Expenses/Expense";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Phone', amount: 564.57, date: new Date(2022, 5, 28) },
];


function App() {
  const [exData, setExData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (e) => {
    setExData(prevExData => {
      // e : 새로 추가되는 항목
      // ...prevExData : DUMMY_EXPENSES 객체의 키와 값을 추출해서 새로운 객체로 추가
      return [e, ...prevExData];
    });
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={exData} />
    </>
  );
}

export default App;
