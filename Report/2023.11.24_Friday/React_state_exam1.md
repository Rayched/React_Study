<!-- React Study - state 1번 예제 Report -->

# \[React\] `state` 첫번째 예제 Report

- **📔 Reference**
    - **[ReactJS로 영화 웹 서비스 만들기 / 3.0 Understanding State](https://nomadcoders.co/react-for-beginners/lobby)**
    - **[Source Code](/src/2.%20state/exam1.html)**
---

### 💻 기존 코드

#### 버튼 클릭 예제 (`HTML`, `Vanilla JS`)

``` html
<html>
    <head></head>
    <body>
        <div id="root">
            <h4>Click Here 👇</h4>
            <button id="ClickBtn">Click !</button>
            <p id="ClickCount">버튼 클릭 횟수 : 0회</p>
        </div>
    </body>
    <script>
        const ClickBtn = document.getElementById("ClickBtn");
        const ClickCount = document.getElementById("ClickCount");

        let Counter = 0;

        function BtnClickCount(){
            Counter = Counter + 1;
            ClickCount.innerText = `버튼 클릭 횟수 : ${Counter}회`;
        }

        ClickBtn.addEventListener("click", BtnClickCount);
    </script>
</html>
```
![Alt text](image.png)

#### 💻 프로그램 동작 과정

- `document.getElementById()` 함수를 통해 
- `<button id="ClickBtn">`, `<p id="ClickCount">` 두 요소를 `DOM` 객체로 가져온다.
    
- 그 다음 `addEventListener()` 함수를 통해, **버튼 `click`** 이라는 `event`가 발생하면 <br/>
  인자로 전달한 `Callback` 함수인 `BtnClickCount()`를 실행시킨다.

- 함수 `BtnClickCount`는 '버튼 클릭 횟수'의 초기 값을 담당하는 <br/>
  변수 `Counter`의 현재 값에 숫자 1을 더한 값을 저장한다.
    
- `HTML`에서 `버튼 클릭 횟수 : 0`  요소인 `<p id="ClickCount">` 텍스트를 <br/>
  `버튼 클릭 횟수 : ${Counter}` 로 수정한다. <br/>
  (`DOM` 객체인 `ClickCount`의 `innerText` Property의 값을 수정함.)

- 이를 통해서 내가 버튼을 클릭할 때 마다 <br/>
  실시간으로 버튼 클릭 횟수가 올라가는 것을 확인할 수 있다.

<br/>
<hr/>

### 💻 구현 과정

#### **버튼 클릭 예제 / `ReactJS`**

- 이전에 배운 `JSX` 문법을 활용해서 아래와 같이 `React Element`를 구현한다.

``` html
<html>
<head>
    <meta charset="utf-8">
    <title>[React] 버튼 클릭 예제</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");

    let Counter = 0;

    function BtnClickCount(){
        Counter = Counter + 1;
    }

    const ClickBtn = () => {
        return (
            <button onClick={BtnClickCount}>
                Click !
            </button>
        );
    }

    const ClickCount = () => {
        return (
            <p>버튼 클릭 횟수 : {Counter}</p>
        );
    }
    //문자열에 변수 값을 추가할 때, `${}`으로 작성했던 것처럼
    //HTML 텍스트에 변수 값을 추가하려면 {var_name}으로 작성하는 것으로
    //HTML 요소 텍스트에 변수 값을 표시할 수 있게된다.

    const Container = () => {
        return (
            <h4>Click Here 👇</h4>
            <ClickBtn />
            <ClickCount />
        );
    };

    ReactDOM.render(Container, root);
</script>
</html>
```

- 위와 같이 코드를 작성하고, 프로그램을 실행해보자.
- **'Click !'** 이라고 적힌 버튼을 클릭해도 <br/>
  하단의 **'버튼 클릭 횟수'** 의 숫자 값은 초기 값에서 변화가 없다.

    ![Alt text](image-1.png)

- 프로그램을 다시 실행해서 버튼을 5번 클릭한 다음 <br/>
  개발자 콘솔을 열어서 버튼 클릭 횟수를 기록하는 변수 `Counter`의 현재 값을 확인해보자.

    ![Alt text](image-2.png)

- 버튼을 총 5번 클릭했기 때문에 `console.log(Counter)`의 결과 값은 <br/>
  숫자 `5`가 나오는 것을 확인할 수 있다.

- 즉, 버튼을 클릭할 때마다 `BtnClickCount` 함수는 정상적으로 실행된다는 것이다.
- 그런데도 왜 **'버튼 클릭 횟수 : 0'** 에서 변화가 일어나지 않는다.

- 이는 웹 페이지의 **'버튼 클릭 횟수 UI'** 가 업데이트 되지 않아서 발생하는 문제이다.

---

### 📃 정리

``` markdown

우리가 `React`로 구현한 웹 페이지가 처음 랜더링될 때
버튼 클릭 횟수를 기록하는 변수 `Counter`의 초기 값은 0이다.

그리고 버튼을 계속 클릭해서 `BtnClickCount()` 함수를 호출하고
해당 함수를 통해 변수 `Counter`에 저장된 값을 계속해서 올려놔도

`버튼 클릭 횟수 : {Counter == 0}`인 상태에서 업데이트가 되지 않는다.

이는 `React Component`가 처음 한 번만 랜더링되기 때문에 발생하는 문제이다.

그리고 이러한 문제를 해결하는 방법은 아래와 같다.

1. `BtnClickCount()` 함수를 호출할 때
	`Container` 컴포넌트를 재 랜더링하도록
	`BtnClickCount` 함수의 코드를 수정한다.
	
2. 랜더링을 수행하는 임의의 함수를 선언하고
	해당 함수를 호출해서 랜더링 작업을 수행한다. 
	(중복 코드 제거)
```

---

### 💻 버튼 클릭 예제 / `ReactJS` (문제 해결)

#### 1. `BtnClickCount()` 함수에 `ReactDOM.render()` 구문 추가해서 UI Update

``` jsx
//<script type="text/babel">
const root = document.getElementById("root");

let Counter = 0;
function BtnClickCount(){
	Counter = Counter + 1;
	
	//Update Start
	ReactDOM.render(<Container />, root);
	//Update End
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

ReactDOM.render(<Container />, root);
//</script>
```

<br/>

---

<br/>

#### 2. 임의의 함수 `render()` 생성, 해당 함수 호출을 통해 `rendering` 작업 수행한다.

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

![Alt text](/Report/2023.11.24_Friday/Reference's_Image/image-3.png)

- 문제 없이 **'버튼 클릭 횟수 : n'** 숫자가 올라가는 것을 확인할 수 있다.

---

### 💻 Extra
처음 예시로 들었던 문제 (`HTML`, `Vanilla JS` 구현)와 <br/>
`ReactJS`로 구현한 문제의 소스코드에서 **'버튼 클릭 횟수'** 부분을 <br/>
개발자 콘솔의 **'Element'** 탭에서 확인해보자.

---
<br/>

- **`HTML`, `JavaScript`로 구현한 예제의 경우**
    - 버튼을 클릭해서 버튼 클릭 횟수를 계속해서 올려보자.

    - 동시에 개발자 콘솔의 `Element` 탭을 열어서 <br/>
     **'버튼 클릭 횟수 : '** 라고 적힌 요소를 확인해보자.
    
    - 해당 요소 `Content` 부분이 Highlight가 들어오면서 <br/>
      내용이 업데이트되는 것을 확인할 수 있다.
![Alt text](/Report/2023.11.24_Friday/Reference's_Image/image6.png)

<br/>

---
<br/>

- **`ReactJS`로 구현한 예제의 경우**

    - 앞에서 했던 것과 마찬가지로 버튼을 계속 클릭해서 <br/>
        버튼 클릭 횟수를 올려보자.

    - 동시에 개발자 콘솔의 `Element` 탭을 열어서 <br/>
     **'버튼 클릭 횟수 : '** 라고 적힌 요소를 확인해보자.

    - 해당 요소에서 **'버튼 클릭 횟수 : '** 부분은 Highlight가 들어오지 않고 <br/>
        실질적으로 Update된 부분인 숫자 쪽, 변수 `Counter`가 들어간 부분에만 <br/>
        Highlight가 들어오는 것을 확인할 수 있다.

        ![Alt text](/Report/2023.11.24_Friday/Reference's_Image/image7.png)

---

