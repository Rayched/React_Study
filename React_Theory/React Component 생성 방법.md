
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

#### `render()`

- `React.createElement()`를 통해 생성한 `React Element`를 웹 페이지에 출력하려면 <br/>
   해당 `React Element`를 저장한 변수를 `render()` 함수에 인자로 전달해야 한다.<br/>
   그리고 `React Element`를 전달 받은 `render()` 함수는 웹 페이지에 <br/>
   해당 `React Element`를 `Rendering` 한다.
- 아래와 같이 `id="root"`인 `<div>` 요소를 생성하고 <br />
   이를 `getElementById()` 함수를 통해 `DOM` 객체의 형태로 가져오자.

``` html
<div id="root"></div>
```

``` js
const root = document.getElementById("root");
```

- 그 다음 `ReactDOM` 객체의 `render()` 함수를 실행해보자. <br/>
   이때 앞에서 생성한 `React Element`를 인자로 전달한다.

``` js
const root = document.getElementById("root");

const Exam = React.createElement("div", { id: "div1" }, "테스트");

ReactDOM.render(Exam, root);
```

- 위의 소스 코드를 실행하면 아래와 같이 `React Element`가 <br/>
   웹 페이지에 정상적으로 `Rendering` 된 것을 확인할 수 있다.

---

#### `createElement() 예제` 

- `React Element` 생성과 웹 페이지에 `Rendering` 하는 방법에 대해 알아봤으니 <br/>
   이제 간단한 예제를 하나 만들어보자.
- 아래 예제는 버튼을 누르면, "안녕하세요"라고 적힌 알림 창이 나오는 간단한 예제다.
- `HTML`, `Vanilla JS` 로 구현한 코드를 `React`를 활용해서 똑같이 구현해보자.

``` HTML
<!-- HTML, Vanilla JavaScript로 구현한 버튼 클릭 예제-->
<html>
	<head>
		<meta charset="utf-8">
		<title>Btn 예제</title>
	</head>
	<body>
		<h4>Click Here 👇</h4>
		<button id="Btn">Click!</button>
	</body>
	<script>
		const Btn = document.getElementById("Btn");

		const ClickEvent = () => {
			alert("안녕하세요.");
		};

		Btn.addEventListener("click", ClickEvent);
	</script>
</html>
```

---

#### 문제 풀이

- `HTML` 문서에서 `React` 실행시키기 위해 아래 두 `<script>` 태그를 추가하자.

``` html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- 위의 두 `<script>` 태그를 `HTML` 파일에 추가 했다면 <br/>
   `Rendering` 된 `React Component`를 표시할 `Container` 요소를 만들어야 한다.
   아래와 같이 `<div>` 태그를 추가하고, 해당 요소에 `id` 속성을 부여해주자.
   
``` html
<body>
	<div id="root"></div>
	<!-- id 속성 값은 원하는 걸로 지정해도 문제는 없다. -->
</body>
```

- 이제 본격적으로 코드를 구현해보자.
- 먼저 `React Component` 표시하는 `Container` 요소를 참조할 수 있도록 <br/>
   `document.getElementById()` 함수를 통해 `id` 속성의 값이 `root`인 <br/>
   `<div>` 요소를 가져오도록 하자.
   
``` js
const root = document.getElementById("root");
```

- 그리고 `React.createElement()` 함수를 통해 두 개의 `React Element`생성하자.

``` html
<h4>Click Here 👇</h4>
<button id="Btn">Click!</button>
```

``` js
const Message = React.createElement("h4", null, "Click Here 👇");
//id, class 등 별도의 속성을 추가하지는 않을 것이기 때문에
//매개변수 prop의 값은 `null`로 지정해두자.

const ClickBtn = React.createElement(
	"button",
	{
		id: "Btn"
	},
	"Click!"
);
```

- `addEventListener()` 함수를 통해서 버튼을 클릭했을 때 <br/>
   **"안녕하세요."** 라는 문장을 출력하게 하려면 `render()` 함수를 통해 <br/>
   웹 페이지에 `Rendering` 된 `ClickBtn`을 `document.getElementById()`를 통해서 <br/>
   다시 가져와야 하는데 이러면 너무 비효율적이고, `React`를 사용하는 의미가 없다.
   
- 물론 `HTML`의 속성 중 하나 인, `onClick` 속성을 통해서 <br/>
   버튼을 클릭했을 때, **"안녕하세요."** 라는 문장이 적힌 알림 창을 표시하는 것이 가능하다.

``` js
//ClickBtn의 prop로 onClick 추가

const ClickBtn = React.createElement(
	"button",
	{
		id: "Btn",
		onClick: () => alert("안녕하세요.")
	},
	"Click!"
);
```


- 안내 메시지 (`<h4>`)와 버튼을 구현하는 데 완료했다.
- 이제 `render()` 함수를 사용해서 두 개의 `React Element`를 웹 페이지에 표시해보자.

``` js
const root = document.getElementById("root");
const Message = React.createElement("h4", null, "Click Here 👇");

const ClickBtn = React.createElement(
	"button",
	{
		id: "Btn",
		onClick: () => alert("안녕하세요.")
	},
	"Click!"
);

//New
ReactDOM.render(Message, root);
ReactDOM.render(ClickBtn, root);
```

- `Message`와 `ClickBtn` 두 개의 `React Element`가 성공적으로 `Rendering` 됐다.
- 물론 이런 식으로 `render()` 함수를 통해 개별적으로 `Rendering` 할 필요는 없다.

- 두 `React Element` 담을 임의의 `Container` 요소를 만들고 <br/>
  `render()` 함수로 해당 `Container` 요소를 `root`에 `Rendering` 하면 <br/>
  자식 요소가 된 `Message`와 `ClickBtn`도 동시에 `Rendering` 된다.

``` js
//기존 코드
const root = document.getElementById("root");
const Message = React.createElement("h4", null, "Click Here 👇");

const ClickBtn = React.createElement(
	"button",
	{
		id: "Btn",
		onClick: () => alert("안녕하세요.")
	},
	"Click!"
);

//New
const Btn_Container = React.createElement("div", null, [Message, ClickBtn]);
//Message, ClickBtn을 배열의 형태로 묶어서
//Btn_Container에 자식 요소로 전달한다.

ReactDOM.render(Btn_Container, root);
```

- 개별적으로 `rendering` 하지 않고, 두 개의 `React Component`를 <br/>
   하나의 `Container`로 묶어서 한 번에 `rendering` 하니 좀 더 편해졌다.
   나름 유용한 방법 같으니 기억해두자.

---
#### JSX

- 지금까지 배웠던 `React Element` 생성하기 위해서 아래와 같이 코드를 작성했었다.

``` js
const R_Element = React.createElement("div", null, "React Element Example");
```

- 다만 이 방법은 시각적으로 봤을 때 `HTML Element`를 만든다는 느낌은 별로 들지 않는다.
- 물론 `React Component` 만들 때, 위의 방법은 잘 사용하지 않는다.
- 주로 JSX라는 방법을 통해서 `React Component`를 만들기 때문이다.

- **`JSX`** 는 `JavaScript`를 확장한 문법으로 <br/>
   아래와 같이 `HTML` 태그 문법과 유사한 형태를 보여주고 있다.
   
``` jsx
const R_Element = <div>React Element Example</div>;
```

- `createElement()` 함수를 통해서 `React Element` 구현한 예시와 <br/>
  **`JSX`** 문법을 활용해서 `React Element` 구현한 예시를 비교했을 때 <br/>
  `JSX` 문법 쪽이 좀 더 직관적으로 보인다는 것을 알 수 있다.

- 이제 앞에서 구현했던 **버튼 예제**를 `JSX` 문법을 활용해서 똑같이 구현해보자.
- 
``` js
//예시

const root = document.getElementById("root");

const Head_Text = React.createElement("h4", null, "Click Here 👇");
const Click_Btn = React.createElement(
	"button",
	{
		id: "ClickBtn"
		onClick: () => alert("안녕하세요.");
	},
	"Click!"
);

const Container = React.createElement("div", null, [Head_Text, Click_Btn]);
ReactDOM.render(Container, root);
```

