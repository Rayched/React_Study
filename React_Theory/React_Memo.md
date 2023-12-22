
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
		console.log(`${BtnName}가 랜더링 됐습니다.`);
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

<h4><a href="https://rayched.github.io/React_Study/Exam/prop/memoExam" target="_blank">'React.memo' 예제 실행하기</a></h4>

```
Default가 랜더링 됐습니다.
Non_Change가 랜더링 됐습니다.

> 'Default' 버튼 클릭

Name Change가 랜더링 됐습니다.
```

- `Default` 버튼을 클릭하면, `eventListener`로 `ChangeName` 함수가 실행된다. <br/>
	해당 함수 `ChangeName`은 `state` 값을 변경하는 `setValue` 함수를 호출한다.

- 그리고 `setValue` 함수에 의해 `state` 값이 `Default`에서 `Name Change`로 변경되고 <br/>
	Re-rendering이 발생한다. 

- 첫 번째 버튼 요소인 `Default` 버튼의 이름 `BtnName`은  `state`의 값을 참조하기 때문에 <br/>
	`state` 값이 변경되면 이를 참조하는 `BtnName` Property의 값도 변경이 되기 때문에
	첫 번째 버튼 요소의 이름도 `Name Change`로 바뀌게 된다.

* 하지만 두 번째 버튼 요소인 `Non Change`의 버튼의 이름, `BtnName` `prop`의 변화는 없으므로 <br/>
	`React.memo()`에 따라 마지막으로 Rendering됐던 결과가 재 사용된다.

- 즉, `props`에 변화가 없는 두 번째 버튼 요소는 Re-rendering이 발생하지 않는다는 것이다.

