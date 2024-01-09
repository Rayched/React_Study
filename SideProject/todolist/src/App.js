import { useState } from "react";

function App() {
  const [ToDo, setToDo] = useState(""); //일정
  const [ToDos, setToDos] = useState([]); //일정 담아둘 배열

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if(ToDo === ""){
      return;
    } 
    setToDo("");
    setToDos(function (currentArray){ return [ToDo, ...currentArray]});
  };

  console.log(ToDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={ToDo} 
          type='text' 
          placeholder="일정을 입력해주세요."
        />
        <button className="AddToDo">추가</button>
      </form>
    </div>
  );
}

export default App;

/**
 * 1. To Do List 기본 코드 작성
 * '추가' 버튼을 클릭하면 내가 입력한 일정이 화면에 나오도록 logic 작성
 * (form submit (input, button))
 * 
 * 일정 입력 후 '추가' 버튼을 클릭하면 내가 입력했던 일정이
 * console 탭에 출력된다. 
 * (form 제출 시 onSubmit 함수 실행)
 * 
 * 2. onSubmit 함수 logic 수정 (form 제출 시 실행되는 함수)
 * - 일정을 입력하고, '추가' 버튼을 클릭하면
 *   console 창에 내가 입력했던 일정 출력하고
 *   일정 입력 창을 비워둔다.
 *  
 * - 일정 입력 창이 비어있으면 아무것도 출력하지 않는다. 
 *  (함수 종료)
 * 
 * 3. 추가한 일정을 담아둘 배열 추가
 *  - state를 직접적으로 수정 불가하니
 *    기존 배열 함수 array.push()를 통해 일정을 ToDos 배열에 담을 수 없다.
 *  - ToDos를 수정하는 setToDos 함수를 통해서, 일정을 배열에 추가 가능
 *    단, Array function은 사용 불가하므로 아래 함수 추가해서 해결함.
 *    
 */
