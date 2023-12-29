
### 개요 / 이전 내용 복습

- 지금까지 배웠던 것을 복습하는 겸, 버튼 예제를 하나 만들어보자.
- 버튼 하나와 버튼을 클릭한 횟수를 보여주는 아주 간단한 예제 말이다.

``` jsx
//<script type="text/babel">

function App(){
	const [counter, setValue] = React.useState(0);

	const BtnClick = () => setValue((prev) => prev + 1);

	console.log("Rendering"); 
	//App Component가 웹 페이지에 랜더링됐다는 것을 알려주기 위한 용도
	
	return (
		<div>
			<h3>Click Here 👇</h3>
			<button onClick={BtnClick}>Click</button>
			<h4>버튼 클릭 횟수 : {counter}</h4>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- `state` 값의 변화에 따라서, Component가 Re-rendering되고 <br/>
	그 과정에서 App 함수 내부의 코드가 계속 반복해서 실행된다.  <br/>
	(버튼을 클릭할 때마다 console에 **"Rendering"** 이라는 문자 출력으로 확인 가능)

- 위의 `<App />` Component에서 Re-rendering이 발생해도 상관 없는 코드도 있지만 <br/>
	경우에 따라서는 특정 코드가 `<App />`이 처음 Rendering될 때만 실행하고 <br/>
	두 번째부터는 실행이 되지 않도록 하게 만들고 싶다.

- 다만 지금까지 배웠던 것 (`JSX`, `state`, `props`, ...) 만으로는 불가능하다.

- 이번에는 `<App />` Component가 처음 Rendering될 때만 코드가 실행되고 <br/>
	`state` 값이 변해도 특정 코드가 다시 실행되지 않게 하는 방법에 대해 다룰 것이다.

---
### `useEffect` Part I
`
- 특정 코드를 딱 한 번만 실행될 수 있게 해주는 `React` 함수

``` js
React.useEffect(/*Callback Func*/, /*[]*/);
```

- 위의 예시처럼 `useEffect()` 함수는 두 개의 인자를 가지고 있다.
- 하나는 `Callback Func`, 딱 한 번만 실행하고 싶은 함수를 인자로 전달한다.
- 또 다른 하나는 `[]`, 배열이다.

- `useEffect()`의 인자로 전달된 함수는 `Component`가 Rendering이 완료된 후에 실행된다.

``` jsx
//<script type="text/babel">
const App = () => {
	const [counter, setValue] = React.useState(0);
	const BtnClick = () => setValue((prev) => prev + 1);

	console.log("항상 실행되는 코드");

	function OnlyRunOnce(){
		console.log("한 번만 실행되는 함수입니다.")
	}

	//New
	React.useEffect(OnlyRunOnce, []);
	
	return (
		<div>
			<h3>Click Here 👇</h3>
			<button onClick={BtnClick}>Click</button>
			<h4>버튼 클릭 횟수 : {counter}</h4>
		</div>
	);
};
//</script>
```

- `App` Component가 Rendering이 완료된 이후에 <br/>
	`useEffect()` 함수의 인자로 전달한 `OnlyRunOnce` 함수가 실행이 된다.
- 버튼을 클릭해서, `state` 값이 변화하여 Re-rendering이 발생될 때 <br/>
	`useEffect()` 함수의 인자로 전달했던 함수는 다시 실행하지 않는 것을 확인할 수 있다.

---
### `useEffect` Part II

- `useEffect` 함수를 통해서 한 번만 실행할 코드를 지정하는 법을 알았으니 <br/>
	버튼 예제 바로 아래 칸에 검색 창을 추가해보자.
	
``` jsx
//<script type="text/babel">
const App = () => {
	const [counter, setValue] = React.useState(0);
	const BtnClick = () => setValue((prev) => prev + 1);

	//new
	const [Keyword, setKeyword] = React.useState(0);
	const TextChange = (event) => {
		setKeyword(event.target.value);
	};

	console.log("Rendering");

	function OnlyRunOnce(){
		console.log("한 번만 실행되는 함수입니다.")
	}
	
	React.useEffect(OnlyRunOnce, []);
	
	return (
		<div class="Main">
			<div class="BtnCount">
				<h3>Click Here 👇</h3>
				<button onClick={BtnClick}>Click</button>
				<h4>버튼 클릭 횟수 : {counter}</h4>
			</div>
			<hr/>
			<div class="SearchBar">
				<span>검색창</span>
				<input 
					type="text"
					placeholder="검색어를 입력해주세요."
					onChange={TextChange}
					value={Keyword}
				/>
			</div>
		</div>
	);
};
//</script>
```

- 버튼을 클릭하거나, 검색 창에 검색어를 입력할 때마다 <br/>
	Console 창에 **"Rendering"** 이라는 문장이 출력 되는 것을 확인할 수 있다.

- 이제 버튼을 클릭하면 **"버튼을 클릭했습니다."** <br/>
	검색어를 입력하면 **"검색어를 입력했습니다."** 이라는 문장이 출력 되게 해보자.	

``` jsx
React.useEffect(/*Callback Function*/, /*[]*/);
```

- `useEffect(function, [])` 함수에서 인자인 `[]`에 `state` 변수를 추가하면 <br/>
	해당 변수가 참조하는 `state` 값의 변화가 생기면 `useEffect()`의 인자로 전달한 <br/>
	함수를 실행시킨다.

- 이제 이를 활용해서 코드를 작성해보자.

``` jsx
//<script type="text/babel">
const App = () => {
	const [counter, setValue] = React.useState(0);
	const BtnClick = () => setValue((prev) => prev + 1);
	
	const [Keyword, setKeyword] = React.useState(0);
	const TextChange = (event) => {
		setKeyword(event.target.value);
	};

	React.useEffect(()=>{
		console.log("버튼을 클릭했습니다.");
	}, [counter]);
	
	React.useEffect(()=>{
		console.log("검색어를 입력했습니다.");
	}, [Keyword]);
	
	return (
		<div class="Main">
			<div class="BtnCount">
				<h3>Click Here 👇</h3>
				<button onClick={BtnClick}>Click</button>
				<h4>버튼 클릭 횟수 : {counter}</h4>
			</div>
			<hr/>
			<div class="SearchBar">
				<span>검색창</span>
				<input 
					type="text"
					placeholder="검색어를 입력해주세요."
					onChange={TextChange}
					value={Keyword}
				/>
			</div>
		</div>
	);
};
//</script>
```

- 이제 버튼을 클릭하면, "버튼을 클릭했습니다." <br/>
	검색어를 입력하면 "검색어를 입력했습니다."이라는 문장이 출력 되는 것을 확인할 수 있다.

- 다만 `<App />` Component가 처음 Rendering될 때 <br/>
	위의 두 문장이 기본으로 출력 되고, 검색 창에 텍스트 입력을 할 때마다 <br/>
	계속해서 "검색어를 입력했습니다."이라는 문장이 출력 되는 것이 불편하다.

- 특정 조건에만 문장이 출력 되도록 코드를 수정해보자.

``` jsx
//<script type="text/babel">
const App = () => {
	const [counter, setValue] = React.useState(0);
	const BtnClick = () => setValue((prev) => prev + 1);
	
	const [Keyword, setKeyword] = React.useState(0);
	const TextChange = (event) => {
		setKeyword(event.target.value);
	};

	React.useEffect(()=>{
		console.log("버튼을 클릭하거나");
		console.log("검색어를 입력해주세요.");
	}, []);
	
	React.useEffect(()=>{
		if(counter !== 0){
			console.log("버튼을 클릭했습니다.");
		}
	}, [counter]);
	
	React.useEffect(()=>{
		if(Keyword.value === 3){
			console.log("검색어를 입력했습니다.");
		}
	}, [Keyword]);
	
	return (
		<div class="Main">
			<div class="BtnCount">
				<h3>Click Here 👇</h3>
				<button onClick={BtnClick}>Click</button>
				<h4>버튼 클릭 횟수 : {counter}</h4>
			</div>
			<hr/>
			<div class="SearchBar">
				<span>검색창</span>
				<input 
					type="text"
					placeholder="검색어를 입력해주세요."
					onChange={TextChange}
					value={Keyword}
				/>
			</div>
		</div>
	);
};
//</script>
```

- 이제 `<App />` Component가 처음 Rendering되면 <br/>
	**"버튼을 클릭하거나, 검색어를 입력해주세요."** 이라는 문장이 출력 된다.

- 그리고 버튼을 클릭할 때마다 Console 창에 **"버튼을 클릭했습니다."** 문장이
- 검색 창에 세 글자 이상의 검색어를 입력되면, **"검색어를 입력했습니다."** 문장이 출력 된다.

--- 

### 📔 Reference

> **[ReactJS로 영화 웹 서비스 만들기 / Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**
> **[useEffect / React 공식 문서](https://ko.legacy.reactjs.org/docs/hooks-reference.html#useeffect)**

