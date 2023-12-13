//App Component
import React from 'react';

function App() {
  const [BtnCounter, setValue] = React.useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  console.log("render")
  return (
    <div>
      <h4>Click Here 👇</h4>
      <button onClick={onClick}>Click !</button>
      <h4>버튼 클릭 횟수 : {BtnCounter}</h4>
    </div>
  );
}

export default App;
