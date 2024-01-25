
# \[React\] `State`의 정의


## 📃 Reference
- **[처음 만난 리액트 / Inflearn](https://inf.run/YehVc)**
- **[State and Lifecycle / React 공식 문서](https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html)**

---
### `state`

- state => "상태" (일반적인 의미)
- `state` => `React Component`의 상태
- 여기서 '**상태**' 가 `React Component`가 정상적인지 <br/>
	아니면 비 정상적 인지의 상태를 의미하는 것이 아니다.
- `state` => `React Component`의 data, 변경할 수 있는 data

- `state`에는 `Rendering`이나 데이터 흐름에 사용되는 값만 포함 시켜야 한다. <br/>
	(`state`의 값이 변경되면, 해당 `state`와 연결된 `Component`가 `Re-render`되기 때문) <br/>

- `state` == `JavaScript Object`
- `state` 값은 직접적으로 수정해서는 안되고 <br/>
	해당 값을 수정하는 `setState()` 함수를 통해서 `state` 수정해야 한다. <br/>
- `state`를 직접적으로 수정하게 된다면, 해당 `state`와 연결된 `Component`가 <br/>
	개발자가 의도한 대로 작동하지 않게 될 수도 있다.

- 따라서 `state`의 값을 수정하고자 한다면 <br/>
	해당 값을 참조하는 `setState()` 함수를 통해서 수정해야 한다.

---

### 버튼 예제 만들기 (`state` 활용 X)

- 버튼 하나와 버튼을 클릭한 횟수를 보여주는 간단한 웹 페이지를 만들어보자.

``` jsx
//<script type="text/babel">
let Counter = 0;
function ClickCount(){
	Counter = Counter + 1;
}

const App = () => {
	return (
		<div>
			<h4>아래 버튼을 클릭해보세요. 👇</h4>
			<button onClick={ClickCount}>버튼 / BUTTON</button>
			<h4>버튼 클릭 횟수 : {Counter}회</h4>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 위의 예제에서 버튼을 클릭해도 하단의 '버튼 클릭 횟수 : 0회'에서 변화가 없다.
- 'F12' 키를 눌러서 개발자 Console을 열고, console 탭에 출력 되는 메시지를 확인해보자.

``` js
console.log(`Counter = ${Counter}`);
```

- 위의 코드를 `ClickCount` 함수에 추가하고, 예제를 실행해보자.
- 버튼을 클릭했을 때, `click event`가 발생, `ClickCount()` 함수가 실행된다.

- 그리고 해당 함수에 의해 변수 `Counter`의 값에 변화가 생기고 <br/>
	`Counter = Counter(현재 값) + 1`

- 변수 `Counter`의 값이 `Console` 탭에 출력 되는 것을 통해서 <br/>
	버튼 `Click event`가 발생했을 때 `ClickCount()` 함수가 문제 없이 실행되는 것을 파악했다.

- 그런데 왜 하단의 '버튼 클릭 횟수'에는 변화가 없을까?
- 이는 해당 `Component`를 `Re-Rendering`하지 않아서 생기는 일이다.

- `ClickCount()` 함수에 `App Component`를 `Re-rendering`하는 코드를 추가해보자.

``` jsx
root.render(<App />);
```

- 이제 예제를 다시 실행, 버튼을 클릭할 때마다, 하단의 '버튼 클릭 횟수'가 올라간다.

---
### `state` 맛보기

- `state`의 정의에 대해 알아 봤으니 이제 실제로 `state`사용해볼 차례이다.
- `React.useState()` 통해서 간편하게 `state`와 `state` 수정할 수 있는 함수를 만들 수 있다.

``` jsx
const Test = React.useState();
console.log(Test);
```

- `useState` 통해서 `state`와 `setState` 함수를 만들고, 이를 `Test` 변수에 저장.
- 이후 `console` 창을 확인하면,`state`와 `setState()` 함수가 배열로 저장된 것을 알 수 있다.

```
[undefined, function]
```

- `useState`를 통해서 간편하게 `state`와 `setState` 함수를 만드는 방법을 알았다.

- 다만 `state`와 `setState` 함수를 사용하려면 <br/>
	아래와 같이 배열 `index`를 통해서 임의의 변수에 각각 저장해야 한다.

- 물론 진짜로 그럴 필요는 없고 `구조 분해 할당` 문법을 활용해서
- `state`와 `setState` 함수를 임의의 변수에 한 번에 개별적으로 할당할 수 있다.

``` jsx
const [Test, setTest] = React.useState();
console.log(Test);
console.log(setTest);
```

- 추가적으로 `useState` 통해서 `state`를 만들 때, `()` 내부에 임의의 값을 추가하면
- 해당 값을 `state`의 초기 값으로 설정하는 것이 가능하다.

``` jsx

const [Test, setTest] = React.useState("Hello");
console.log(Test);
```

---
### `state` 활용해서 버튼 예제 만들기

- 이전 예제에서 변수 `Counter`의 값이 바뀔 때마다 매번 `Re-rendering`을 해줘야 했다.
- 하지만 `state`를 활용하면 매번 값이 바뀔 때마다 `Re-rendering`을 할 필요가 없다.
- 아래 예제를 통해 확인해보자.

``` jsx
//<script type="text/babel">
const App = () => {
	const [Counter, setCounter] = React.useState(0);
	
	function ClickCount(){
		setCounter(Counter + 1);
	}
	console.log(`Counter = ${Counter}`);
	
	return (
		<div>
			<h4>아래 버튼을 클릭해보세요. 👇</h4>
			<button onClick={ClickCount}>버튼 / BUTTON</button>
			<h4>버튼 클릭 횟수 : {Counter}회</h4>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 예제를 실행해보면, 값이 바뀔 때마다 별도로 <br/>
	 `App Component`를 `Re-rendering`을 하는 코드를 추가하지 않았음에도 <br/>
	 하단의 버튼 클릭 횟수가 갱신 되는 것을 확인할 수 있다.

