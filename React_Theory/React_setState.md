# \[React\] `setState()`

### 📔 Reference
- **[`state`](/React_Theory/React_State.md)**
- **[처음 만난 리액트 / Inflearn](https://inf.run/YehVc)**

- **[왜 state를 직접 변경하지 않고, useState를 사용해야 하나요? / velog](https://velog.io/@daydreamplace/React-%EC%99%9C.-state%EB%A5%BC.-%EC%A7%81%EC%A0%91-%EB%B3%80%EA%B2%BD%ED%95%98%EC%A7%80-%EC%95%8A%EA%B3%A0.-setState%EB%A5%BC.-%EC%82%AC%EC%9A%A9%ED%95%98%EB%82%98%EC%9A%94)**
- **[컴포넌트 state / React 문서](https://ko.legacy.reactjs.org/docs/faq-state.html#what-does-setstate-do)**

---
### `setState()`

- `setState()` : `state`의 값이 변경되면, 해당 `state` 참조하는 `Component`를 Rendering하는 함수
- 비 동기 적으로 실행되는 함수이다.

``` jsx
//이해를 돕기 위한 예제
//버튼을 클릭하면, 현재 값이 '+1' 만큼 올라간다.
//이때 현재 값과 console에 출력되는 state의 값을 비교해보자.

const App = () => {
	const [state, setState] = React.useState(0);
	function CountUp(){
		setState(state + 1);
		console.log(state);
	};

	return (
		<div>
			<button onClick={Countup}>+1</button>
			<h4>현재 값 : {state}</h4>
		</div>
	);
};
```

```
Output

---------------------
[+1]
현재 값 : 0
---------------------

- 버튼 클릭

현재 값 : 1
console => 0

- 버튼 클릭

현재 값 : 2
console => 1
```


---

### `setState()`가 비 동기 적으로 작동하는 이유

- 기본적으로 `state` 값이 변경되면 `Re-rendering` 발생한다.
- 다만 여기서 변경된 `state`가 많다면 `Re-rendering`이 계속 발생할 것이고 <br/>
	이에 따라서 웹 페이지가 표시되는 데 오랜 시간이 걸릴 것이다. (속도 저하)
- 물론 실제로 이런 일은 발생하지 않는다.

- `ReactJS`는 성능 향상을 위해서 변경된 값들을 모아서 한 번에 업데이트를 진행
- 불 필요한 `Rendering` 줄이고자 `Batch` 기능을 사용하기 때문에
- 비동기로 작동한다고 볼 수 있다.

``` jsx
//연속해서 setState 호출 시

const App = () => {
	const [state, setState] = React.useState(0);
	function CountUp(){
		setState(state + 1);
		setState(state + 1);
		setState(state + 1);
		//3씩 오르지 않고 1씩 증가한다.
		console.log(state);
	};

	return (
		<div>
			<button onClick={Countup}>+1</button>
			<h4>현재 값 : {state}</h4>
		</div>
	);
};
```

---

