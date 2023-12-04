
# \[React\] `state` 두 번째 예제 Report

# 📔 Reference

- **[ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby)**
- **[예제 ver2](/Exam/2.%20state/ButtonClick/exam2.html)**
- **[예제 ver3](/Exam/2.%20state/ButtonClick/exam3.html)**

---
### 복습

``` jsx
//<script type="text/babel">
const root = document.getElementById("root");

let Counter = 0;

function render(){
	ReactDOM.render(<Container />, root);
}

function BtnClickCount(){
	Counter = Counter + 1;
	render();
}

const Container = () => {
	return (
		<div>
			<h4>Click Here 👇</h4>
			<button onClick={BtnClickCount}>Click !</button>
			<p>버튼 클릭 횟수 : {Counter}</p>
		</div>
	);
};

render();
//</script>
```

- 위의 소스 코드는 [이전 장](/Report/2023.11.24_Friday/React_state_exam1.md), 마지막 파트에서 다뤘던 `Re-Rendering` 예제이다.

```
실행 과정

1. 프로그램이 처음 실행될 때, `render()` 함수를 통해
   <Container /> Component가 "root"라는 id 값을 가진 <div> 요소에 담겨진다.
   이때 버튼 클릭 횟수를 가리키는 변수 Counter의 초기 값은 '0'이다.

2. 'event'(버튼 클릭)가 발생하면, <button> 요소의 onClick 속성의 값으로
    전달된 BtnClickCount 함수가 실행된다.
    해당 함수는 변수 Counter의 값을 '1' (Counter = Counter + 1)로 수정하고
    <Container /> Component를 'root' 요소로 전달한다.

3. 버튼을 클릭할 때 마다, <Container /> Component 전체를 Re-Rendering한다.
   (HTML 코드 상에서는 숫자만 변경된다.)
```

- 다만 이러면 웹 페이지에서 데이터가 바뀔 때마다 <br/>
	`Rendering` 작업을 담당하는 `render()` 함수를 매번 수동으로 호출해야 한다. <br/>
	매번 이러기는 다소 번거롭기에 별로 좋은 방식은 아니다.

- 물론 더 좋은 방식이 있고, 해당 방식에 대해서는 바로 아래 장에서 다루도록 하겠다.

---
### `React.useState()`

``` jsx
//<script>
	const App = () => {
		const data = React.useState();
		console.log(data); //??
	};

	const root = document.getElementById("root");
	ReactDOM.render(<App />, root);
//</script>
```

- `state` 값과, `state` 값을 갱신하는 함수를 반환하는 `React` 내장 함수
- `console.log();`를 통해 `return`된 값을 확인해보면 <br/>
	`[undefined, function()]`이라는 배열이 `return`된 것을 확인할 수 있다.
	
	![useState Return 값](/Report/2023.11.27_Monday/Reference's_Image/Sample2.png)
	
- 여기서 `undefined`는 `state` 값을 지칭하고 <br/>
	`useState()` 함수를 호출할 때 임의의 값을 인자로 전달하면 <br/>
	`state`의 초기 값이 해당 값으로 설정된다.
	
	- `const data = React.useState('test')` 
		![State 초기 값을 'test' 설정](/Report/2023.11.27_Monday/Reference's_Image/Sample3.png)	 
		

- 이제 실제로 코드를 작성하면서 `React.useState()`에 대해 알아보도록 하자.

---

# 💻예제 구현


``` jsx
//<div id="root"></div>
//<script type="text/babel">
const root = document.getElementById("root");

const App = () => {
//Component 이름 수정 (Container → App)
	const [Counter, setCounter] = React.useState(0);
	
	function BtnClickCount(){
		setCounter(Counter + 1);
	}
	
	return (
		<div>
			<h4>Click Here 👇</h4>
			<button onClick={BtnClickCount}>Click!</button>
			<p>버튼 클릭 횟수 : {Counter}회</p>
		</div>
	);
}

ReactDOM.render(<App />, root);
//</script>
```

- 프로그램이 실행되면, `<App />` Compornent가 `root` 요소에 `rendering`되고
- 버튼을 클릭할 때 마다 `Component`가 자동으로 `Re-Rendering`된다. <br/>
	(`버튼 클릭 횟수 : {Counter}회`에서 `{Counter}` 만 갱신이 되는 것을 확인 가능)

```
<App /> Component 분석

const [Counter, setCounter] = React.useState(0);
- 변수 Counter와, setCounter에 useState()의 결과 값인
  [state, function()] 배열의 값이 각각 따로따로 할당된다.
	* Counter = state = 0
	* setCounter = function()
	
- useState() 함수를 호출할 때, 인자로 숫자 0을 전달했기 때문에
- 'state'의 초기 값은 0이 되며
  이는 'state'를 참조하는 변수 Counter에도 반영된다.

- 웹 페이지에서 버튼을 클릭하면 event가 발생한다. (BtnClickCount 함수 실행)

- BtnClickCount 함수가 호출되면, 해당 함수는 아래 코드를 실행한다.
	* setCounter(counter + 1);

- setCounter() 함수는 state의 값을 'Counter + 1'로 변경한다.
  여기서 변수 Counter는 state를 참조하고, state의 초기 값은 0이므로
  결국 setCounter 함수는 '0 + 1 = 1', 숫자 1을 state의 값으로 전달한다.

- 이는 state를 참조하는 변수 Counter에도 변경된 값이 반영된다.
  ('Counter = 0' → 'Counter = 1')

- 그리고 별도로 render() 함수를 실행하지 않아도
  state 값을 변경한 setCounter()가 Re-Rendering을 진행한다.
```

![예제 실행 결과](/Report/2023.11.27_Monday/Reference's_Image/Sample%204.png)

