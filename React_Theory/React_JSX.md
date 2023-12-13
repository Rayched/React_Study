
## `JSX`

- `JavaScript`의 확장 문법
- `JavaScript + XML / HTML`

``` jsx
const Test = <p>Hello World</p>;
```

- 내부적으로 `XML`이나 `HTML` 작성한 코드를 `JavaScript` 변환하는 과정을 거친다.
- 아래 두 가지 버전의 예제를 준비해뒀다.
- 하나는 `JSX` 사용하지 않고, `JavaScript` 문법으로 작성한 버전
- 다른 하나는 `JSX` 활용해서 작성한 버전이다.

``` js
//JSX 사용하지 않은 예제 코드

const root = document.getElementById("root");
const Btn = React.createElement(
	"button",
	{
		onClick: () => alert("버튼을 클릭했습니다.");
	},
	"Click"
);

ReactDOM.render(Btn, root);
```

``` jsx
//JSX 사용한 예제 코드

const root = document.getElementById("root");

const Btn = (
	<button onClick={()=>alert("버튼을 클릭했습니다.");}>
	Click
	</button>
);

ReactDOM.render(Btn, root);
```

- 단순히 코드의 생김새만 봐도 `JSX` 문법이 좀 더 보기 편하다.
- 두 예제 코드는 동일한 형태의 결과를 return한다.
- `JSX` 작성한 코드의 결과물은 `Babel`에 의해 
  `React.createElement()` 작성한 코드와 동일한 형태로 변환된다.

```js
var Btn = React.createElement(
	"button",
	{ 
		onClick: function onClick(){ return alert("Hello");}
	},
	"Click"
);
```

- `React.createElement()` 함수는 아래와 같은 형태의 객체를 `return` 한다.

``` js
const Btn = {
	Symbol(react.element),
	type: "button",
	props: {
		children: "Click",
		onClick: function onClick(){}
	}
};
```

- `typeof` 연산자를 통해 `Btn`의 타입을 확인해보면, `Object`가 return된다.
- 이때 생성된 객체 == `React Element`
- `React`에서 `JSX` 문법을 사용하는 것이 필수는 아니지만
	UI 관련 작업을 할 때, `React.createElement()`로만 코드를 짜는 것보다
	`JSX` 문법을 활용해서 UI 관련 코드를 짜는 것이 시각적으로 좀 더 편하다.
---
### `JSX` 코드 내부에 `JavaScript` 코드 넣는 방법

- `JSX` 문법으로 작성한 코드 내부에 중괄호 `{...}` 통해서
	내부에 `JavaScript` 코드를 작성할 수 있다.

``` jsx
let Btn_Message = "Click Here"

const Btn = (
	<button onClick={()=>alert("Hello")}>
		{ Btn_Message }
	</button>
);
```

- `Btn_Message`라는 임의의 변수를 만들고, 해당 변수를 중괄호로 묶은 다음
  `JSX` 문법으로 작성된 `Btn` Element 내부 `Content` 부분에 추가하였다.
- 이후 코드를 실행하면 변수 `Btn_Message`의 값이 버튼의 이름으로 추가됐다.

---

### `JSX` == `JavaScript` 표현 식

- `JSX` 문법으로 작성한 코드가 형태 적으로 `HTML`과 비슷한 형태라고 해도
	결과적으로 `JSX` 코드도 `JavaScript` 문법 규칙을 따른다.

``` jsx
const Btn = (
	<button
		onClick={()=>alert("Hello")}
		class="Btn"
	>		
		{ Btn_Message }
	</button>
);
```

- `Btn` Element에 `class` 속성을 추가하였다. (속성 값: `Btn`)
- 별 문제 없이 Rendering되지만, 개발자 Console을 확인하면 
	아래와 같은 경고 메시지가 출력 되는 것을 확인할 수 있다.
	
```
react-dom.development.js:73 Warning: 
Invalid DOM property `class`. Did you mean `className`?
```

- `JavaScript`에서 `class` 키워드는 별도의 기능이 존재하는 키워드이므로
	위와 같은 경고 메시지가 출력 된다.
- 따라서 `JSX` 문법에서 `class` 속성을 추가할 때는, `className` 작성한다.

``` jsx
const Btn = (
	<button
		onClick={()=>alert("Hello")}
		className="Btn"
	>		
		{ Btn_Message }
	</button>
);
```

---

### 📔 Reference

- **[JSX 소개 / React 문서](https://ko.legacy.reactjs.org/docs/introducing-jsx.html)**
- 