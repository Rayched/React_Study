
#### `React.createElement()` 

- **`React.createElement()` 함수는 결과 값으로 `HTML` 요소를 `return` 한다.**
- **매개변수 목록**
	- `type` 
		- `HTML` 요소의 `type`을 명시한다. 
		- `React Component`, `React Fragment` 타입 값도 인자로 전달 가능

	- `property` 
		- `createElement()` 결과 값인 `HTML Element`에 기입하는 `data` 객체
		- `id`, `class`, `style`과 같이 `HTML` 속성들을 주로 명시한다.

	- `child` : `HTML` 요소 내부에 추가할 자식 요소를 명시한다.
	
- `React.createElement()` 함수에서 매개변수 `type`에 전달된 값과 <br/>
   동일한 `HTML Element`, `React Component`를 `return`하는 함수이다.

---

#### `root.render()`

- `React.createElement()`를 통해 생성한 `React Element`를 Rendering 하려면 <br/>
   해당 `React Element`를 저장한 변수를 `render()` 함수에 전달하는 것으로 <br/>
   `React Element`를 웹 페이지 상에 출력할 수 있다. <br/>
- 아래와 같이 `id="root"`인 `<div>` 요소를 생성하고 <br />
   이를 `getElementById()` 함수를 통해 `DOM` 객체의 형태로 가져오자.

``` html
<div id="root"></div>
```

``` js
const root = document.getElementById("root");
```

- 그 다음 인자로 `React Element` `render()` 함수를 실행해보자.

``` js
const root = document.getElementById("root");

const Exam = React.createElement("div", { id: "div1" }, "테스트");

root.render(Exam);
```