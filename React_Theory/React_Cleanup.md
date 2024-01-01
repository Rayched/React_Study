
### 개요 / 이전 내용 복습 (~`useEffect`)

``` jsx
//<script>
function BtnExample(){
	React.useEffect(()=>{
		console.log("BtnExample is Rendering");
	}, []);
	
	return (
		<div>
			<h4>💻 BtnExample</h4>
			<h4>Hello World</h4>
			<p>ReactJS - 'clean-up' 함수 예제입니다.</p>
		</div>
	);
}
function App(){
	const [Showing, setShowing] = React.useState(false);
	const onClick = () => setShowing((ShowingState) => !ShowingState);
	
	return (
		<div>
			<button onClick={}>{Showing ? "숨기기" : "표시하기"}</button>
			{Showing ? <BtnExample /> : null}
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 위의 예제는 버튼을 클릭해서 특정 Component를 표시하거나 혹은 숨기는 예제이다.
- 지금까지 배웠던 것, `useEffect()`까지 활용한 간단한 예제이다.

- 화면에서 **'표시하기'** 버튼을 클릭하면, `BtnExample`함수가 실행된다. (Rendering)

- `BtnExample` 함수가 실행되면, 해당 Component가 Rendering이 완료된 이후 <br/>
	`useEffect` 함수 실행, Console 창에 **"BtnExample is Rendering"** 이라는 문장이 나온다.

- 예제 화면으로 돌아와서, '**숨기기**' 버튼을 클릭하면 `BtnExample`이 사라진다.
- 즉, `BtnExample` Component가 예제 화면에서 삭제된다.
--- 
### `clean-up` function

- `ReactJS`에서는 Component를 삭제할 때, 특정한 코드가 실행되게 할 수 있다.
- 이때 Component가 삭제될 때, 실행되는 **코드 / 함수**를 `clean-up` 함수라고 한다.

- 이전 예제에서 '**숨기기**' 버튼을 클릭해서, `BtnExample`을 삭제할 때 <br/>
	특정한 코드가 실행되게 해보자. <br/>
	(Console 창에 **"BtnExample is Deleted"** 문장 출력하기)

``` jsx
//<script>
function BtnExample(){
	React.useEffect(()=>{
		console.log("BtnExample is Rendering");

		//New
		return () => console.log("BtnExample is Deleted");
	}, []);
	
	return (
		<div>
			<h4>💻 BtnExample</h4>
			<h4>Hello World</h4>
			<p>ReactJS - 'clean-up' 함수 예제입니다.</p>
		</div>
	);
}

function App(){
	const [Showing, setShowing] = React.useState(false);
	const onClick = () => setShowing((ShowingState) => !ShowingState);
	
	return (
		<div>
			<button onClick={}>{Showing ? "숨기기" : "표시하기"}</button>
			{Showing ? <BtnExample /> : null}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 예제 화면에서 '**표시하기**' 버튼을 클릭, `<BtnExample />`이 Rendering된다.
- Console 창에 **"BtnExample is Rendering"** 문장이 출력 된다.

- '**숨기기**' 버튼을 클릭하면 `<BtnExample />`이 삭제되고 <br/>
	Console 창에 **"BtnExample is Deleted"** 문장이 출력 된다.

- 위의 예제를 통해서 `clean-up` 함수가 정상적으로 동작하는 것을 확인하였다.

---
### 📔 Reference

- **[ReactJS로 영화 웹 서비스 만들기 / Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**
- **[React 공식 문서](https://ko.legacy.reactjs.org/docs/hooks-effect.html#effects-with-cleanup)**
