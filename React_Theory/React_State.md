
# \[React\] `State`의 정의


## 📃 Reference
- **[처음 만난 리액트 / Inflearn](https://inf.run/YehVc)**
- **[State and Lifecycle / React 공식 문서](https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html)**

---

### 개요

``` jsx
//state를 사용하지 않은 예제
let Counter = 0;
function BtnClick(){
	Counter = Counter + 1;
	console.log("버튼을 클릭했습니다.");
}

const App = () => {
	return (
		<div>
			<h4>아래 버튼을 클릭해보세요. 👇</h4>
			<button onClick={BtnClick}>Click!</button>
			<h4>버튼 클릭 횟수 : {Counter}</h4>
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- 위의 예제에서 버튼을 클릭할 때 마다 `BtnClick` 함수가 실행된다.
- 해당 함수는 변수 `Counter`의 값을 `Counter + 1` 한다.  <br/>
	(변수 `Counter`의 현재 값에 1을 더한 값을 그대로 변수 `Counter`에 저장)
- 다만 그대로 두면 웹 페이지에 버튼 클릭 횟수가 반영되지 않는다.
- 물론 함수는 문제 없이 실행된다.

- 이는 `App` Component를 `Re-rendering`하는 코드를 <br/>
	`BtnClick` 함수에 추가하는 것으로 해결할 수 있다.

- 이제 예제를 다시 확인해보면, 문제 없이 버튼 클릭 횟수가 반영되는 것을 확인할 수 있다.

---
