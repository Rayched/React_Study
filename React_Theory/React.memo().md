
## `React.memo()`

``` js
const MyCompo = React.memo(function MyComponent(props){
	/* props를 사용하여 Rendering */
});
//기존에 만들어둔 Component, 함수도 전달 가능
```

- Component가 동일한 `props`로 동일한 결과를 Rendering한다면 <br/>
	`React.memo`를 호출, 결과를 Memoizing하도록 Wrapping하여 <br/>
	경우에 따라 성능 향상을 누릴 수 있다.
	
- 즉, `React`는 Component를 Rendering하지 않고 <br/>
	마지막으로 Rendering된 결과를 재 사용한다.
	
- Re-rendering이 발생할 때, `props`가 같다면, `React`는 Memoizing된 내용을 재 사용한다.
- 이를 통해서, 불 필요한 Re-rendering을 방지할 수 있다.

---

## 예제를 통해서 `React.memo()` 이해하기


``` jsx
//<script type="text/babel">
const Btn = React.memo(
	function ({BtnName, ChangeName}){
		console.log(`${BtnName}이 랜더링 됐습니다.`);
		return (
			<div>
				<button onClick={ChangeName}>
					{BtnName}
				</button>
			</div>
		);
	}
);

const App = () => {
	const [Value, setValue] = React.useState("Default");

	const ChangeName = () => setValue("Name Change");
	
	return (
		<div>
			<Btn BtnName={Value} ChangeName={ChangeName}/>
			<Btn BtnName="Non Change"/>
		</div>
	);
};

const root = React.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

<h4><a href="/Exam/prop/memoExam.html">'React.memo' 예제 실행하기</a></h4>

