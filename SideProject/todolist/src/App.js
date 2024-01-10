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
    setToDos(function (currentArray){ return [...currentArray, ToDo]});
    setToDo("");
    /**
     * [...Array] == 전개 구문 spread Syntax
     * 
     * App이 처음 실행될 때 currentArray에는 인자로 빈 배열이 들어간다.
     * (ToDos의 초기 값 == [] 빈 배열)
     * 일정 입력 form에서 일정을 입력 (React 공부)
     *'추가'버튼을 클릭하면 입력한 값이 ToDo에 담긴다.
     * 
     * state 'ToDos'의 값을 변경하는 함수 setToDos의 인자인 콜백 함수는
     * ToDo와 currentArray가 담긴 배열을 return한다.
     * (이때 currentArray에 담긴 값은 [빈 배열]이므로)
     * ('[ToDo]' == ["React 공부"] 배열을 return한다.)
     * 그리고 setToDos 함수에 의해 return된 배열이
     * ToDos가 참조하는 state에 저장된다.
     * 
     * 그리고 이 상태에서 새로운 일정을 입력하고 추가를 하면 (JS 공부)
     * 방금 전 입력한 일정이 ToDo에 담기고
     * setToDos 함수의 인자인 콜백 함수가 실행된다.
     * 그리고 방금 전 입력한 값과 인자 currentArray에 전달된 값을
     * 하나의 배열로 만들어서 return한다.
     * 이때 currentArray에 전달된 값은 ToDos의 값과 동일한
     * 
     * 이전에 ToDos state에 저장된 값인 '["React 공부"] 배열이
     * 해당 매개변수 currentArray에 인자로 전달된다.
     * 
     * 그리고 setToDos의 인자인 콜백 함수은 [ToDo, ToDos]
     * ["JS 공부", "React 공부"] 배열을 return하고
     * 해당 값은 다시 ToDos에 저장된다. (state에 저장)
     */
  };

  console.log(ToDos);

  return (
    <div>
      <h3>To Do List</h3>
      <h4>현재 일정 개수 : {ToDos.length}</h4>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={ToDo} 
          type='text' 
          placeholder="일정을 입력해주세요."
        />
        <button className="AddToDo">추가</button>
      </form>
      <hr/>
      {ToDos.map(function (TodoItem, TodoIndex){
        return (
          <div>
            <input type="checkbox" key={TodoIndex}/>
            {TodoItem}
          </div>
        );
      })}
    </div>
  );
}

export default App;

/**
 * React - To do List Part I
 * 
 * 2024.01.09 월요일
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
 *    단, Array function은 사용 불가하므로 Spread Syntax 문법을 활용해서
 *    현재 추가한 일정 및 이전 일정을 배열로 보여줌
 * 
 * 4. 지금까지 추가했던 일정을 보여주는 Element 추가 (2024.01.10 화요일)
 */

/**
 * React - To do List Part II
 * 
 * array.map() 함수를 통해
 * 지금까지 추가했던 일정, ToDos에 저장된 배열 요소를
 * 웹 페이지에 랜더링하도록 구현함.
 * (Callback 함수, 배열 요소 Rendering)
 * 
 * 2024.01.10 수요일 자
 * To do List 기본형 완료
 */

/**
 * To do List에 추가하고 싶은 기능 정리
 * 
 * 처음 To do List가 Rendering될 때
 * [일정 추가] 버튼과 일정만 나오게 하기
 * 
 * 여기서 [추가] 버튼을 클릭하면
 * 일정 입력 form이 나오고
 * 입력 form에서 '추가' 버튼을 클릭하면
 * 바로 아래 줄에 일정이 추가되고
 * '취소' 버튼을 누르면 일정 입력이 취소되도록 구현하기
 * 
 * 일정 수정 및 삭제 기능 구현하기
 * 
 * Style 수정하기
 */
