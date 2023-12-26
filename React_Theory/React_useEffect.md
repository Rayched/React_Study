
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
### `useEffect
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

### 📔 Reference

> **[ReactJS로 영화 웹 서비스 만들기 / Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**
> **[useEffect / React 공식 문서](https://ko.legacy.reactjs.org/docs/hooks-reference.html#useeffect)**

