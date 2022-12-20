import Expense from "./components/Expense";


function App() {
  const expense = [
    {id : 'e1', title : 'Toilet Paper', amount : 94.12, date : new Date(2020, 7, 14)},
    {id : 'e2', title : 'New TV', amount : 799.49, date : new Date(2021, 2, 12)},
    {id : 'e3', title : 'Car Insurance', amount : 294.67, date : new Date(2021, 2, 28)},
    {id : 'e4', title : 'New Phone', amount : 564.57, date : new Date(2022, 5, 28)},
  ];

  return (
    <>
    <Expense item={expense} />
    </>
  );
}

export default App;
