# [React] `props`

### 📔 Reference
>- **[ReactJS로 영화 웹 서비스 만들기 / 노마드 코더 Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**
>- **[Component와 Props](https://ko.legacy.reactjs.org/docs/components-and-props.html)**
>- **[React 최상위 API/React.memo](https://ko.legacy.reactjs.org/docs/react-api.html#reactmemo)**
>- **[PropTypes와 함께 하는 타입 검사](https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html)**


---
## 1. `props` 

### 1 - 1. `props` 다루기

- `props` => 상위 `Component`에서 하위 `Component`로 `data`를 보내려고 할 때 사용할 수 있는 방식 
- `Component` => `JSX` 문법을 `return`하는 단순 `function`이다.

``` jsx
//<script type="text/babel">
function SaveBtn(){
	return (
	<button
		style={{
			backgroundColor: "Green",
			color: "white",
			padding: "10px",
			border: "3px",
			borderRadius: "10px",
			margin: "5px",
		}}
	>
		Save Changes
	</button>
	);
}

function ConfirmBtn(){
	return (
		<button
			style={{
			backgroundColor: "blueViolet",
			color: "white",
			padding: "10px",
			border: "3px",
			borderRadius: "10px",
			margin: "5px",
		}}
		>		
			Confirm
		</button>
	);
}

function App(){
	return (
	<div>
		<SaveBtn />
		<ConfirmBtn />
	</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 위의 예제에서 각 버튼에 CSS style을 적용해줬다.
- 다만 이건 단순한 '복사 + 붙여 넣기'에 불과한 것이다.
- 버튼의 개수가 늘어날 수록 매번 이런 식으로 style을 추가할 수는 없다.

- 이제 우리는 이런 `style`을 모두 갖고 있는 하나의 `Component`를 만들 것이다.
- 버튼의 텍스트만 수정하고, `CSS Style`을 두 번이나 복사 + 붙여 넣기를 할 필요가 없어진다.

``` jsx
//<script type="text/babel">

//function SaveBtn(){...} 기존 SaveBtn을 Btn으로 수정

const Btn = () => {
	return(
		<button
			style={{
				backgroundColor: "blueViolet",
				color: "white",
				padding: "10px",
				border: "3px",
				borderRadius: "10px",
				margin: "5px",
			}}
		>
			Save Changes
		</button>
	);
}
const App = () => {
	return (
		<div>
			<Btn />
			<Btn />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- '**Save Changes**'  적힌 `Btn` Component 두 개가 Rendering된다.
- 다만 이건 우리가 원하는 형태가 아니다.
- `props`를 추가해서, `Btn` Component 두 개가 Rendering될 때 <br/>
	하나는 '**Save**', 다른 하나는 '**Confirm**'이라는 버튼이 화면에 출력이 되게 해보자.

``` jsx
//<script type="text/babel">

const Btn = (props) => {
	return(
		//console.log(props);
		
		<button
			style={{
				backgroundColor: "blueViolet",
				color: "white",
				padding: "10px",
				border: "3px",
				borderRadius: "10px",
				margin: "5px",
			}}
		>
			Save Changes
		</button>
	);
}
const App = () => {
	return (
		<div>
			<Btn BtnName="Save"/>
			<Btn BtnName="Confirm"/>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- `function`에 매개 변수를 추가해서, 해당 함수로 인자를 전달하는 것처럼 <br/>
	`React`의 모든 Component들은 `( )`에 임의의 매개 변수를 추가해서 <br/>
	인자 (Argument)를 전달 받을 수 있다. (`React Component == function`)
- 이때 추가하는 매개 변수의 이름은 원하는 것으로 지정해줄 수 있다. <br/>
	보통은 이를 `props`라고 부르며, `Btn`으로부터 전달 받는 `properties (속성)`다.
- `<Btn BtnName="Save" />` == `Btn({BtnName: "Save"})`

- 위와 같이 `Btn` Component, `Btn` 함수에 `props`라는 매개 변수를 추가하면 <br/>
	`App` 함수에서 `Btn` 함수를 호출할 때 추가했던 `BtnName: "Save"`가 <br/>
	`props`에 전달되는 것을 확인할 수 있다.
- `Btn` Component에 `console.log(props)`를 추가해서 확인해보자.

```
> { 
	BtnName: 'Save' 
	[[Prototype]]: Object
  }
  
> { 
 	BtnName: 'Confirm' 
 	[[Prototype]]: Object
  }

Btn 함수, 컴포넌트가 두 번 Rendering됐기 때문에
Console 창에도 두 개의 결과가 나온다.
```

- 여기서 우리가 지금 하고 있는 것은 `Btn`이라는 이름의 함수를 호출하는 것이다.
- 그리고 `BtnName="Save (Confirm)"`을 인자로 전달하고 있을 뿐이다.

- `props`는 `Btn` 함수가 가지고 있는 첫 번째이자 유일한 인자다.

- 여기서 인자 `props`의 `Data Type`은 `Object`이다. <br/>
	(위의 예제 실행 결과를 통해서 충분히 유추할 수 있다.)
- `props`는 방금 전 `Btn` 함수를 호출할 때 전달했던 값을 `Property`로 가지고 있다. <br/>
	(Key = `BtnName` / Value = `'Save' / 'Confirm'`)

- 이제 `props`에 인자로 전달한 값을 `Btn` Component에 반영하고 싶다.
- `<button>`의 텍스트를 `{props.BtnName}`로 수정하고 확인해보자. <br/>
	(`Object 'props'`에서 `BtnName`이라는 Key 값을 가진 Property 호출)
 
![Alt text](Ref_Imgs/BtnName%EC%9D%98_%EA%B0%92%EC%9D%84_Btn_Component%EC%97%90_%EC%A0%81%EC%9A%A9.png)

- 여기서 `props`는 `Object`이기 때문에, `{BtnName}`과 같이 적을 수 있다. <br/>

``` jsx
//function Btn(props){};

function Btn({BtnName}){};
```

- `{props.BtnName}`, `props`의 `BtnName`의 값을 출력하는 식으로 작성할 필요 없이 <br/>
	`{BtnName}`으로 작성해서 `Property`에 바로 접근할 수 있다. (일종의 Shortcut)
	
* 단, 위의 방식은 Btn 함수의 인자로 전달한 객체의 Property `Key` 만 추가하고 <br/>
	`value`는 추가하지 않고, 이후 Btn 함수를 호출할 때 해당 Property에 값을 전달해주기 때문에 
	Btn 함수에서 설정한 `Key`와 Btn 함수 호출 시, 추가한 Property의 `Key`는 동일해야 한다.


```
추가 설명

1. function Btn(props){}에서 매개변수 'props'의 type은 Object이다.
2. 여기서 'props'는 React Component의 인자로 접근할 수 있는 일종의 리모컨이다.
3. 따라서 'props.BtnName'은 변수 props를 통해서, '(React)props' 객체의
	'BtnName'이라는 Key 값을 가진 Property로 접근하는 것이다.
4. 물론 매개변수 props를 거칠 필요 없이 Object를 바로 추가할 수 있다.
5. function Btn({ BtnName }){}, {props.BtnName}도 {BtnName}으로 수정
6. props라는 매개변수를 거치지않고, 직접적으로 Object를 인자로 추가하였다.
7. 이는 일종의 shortcut이라고 할 수 있다.
8. 단, 여기서 BtnName Property의 Key만 지정하고, value는 지정하지 않았다.
9. 즉, Btn 함수 호출 시 내가 원하는 값을 전달하려면 동일한 Key 값을 통해서
	BtnName Property에 값을 전달해줘야 한다.
```

---
### 1 - 2. `props`에 `function` 전달하기

- 앞에서 `props`에 `string`, `boolean` 등을 보내봤다.
- 이번에는 `props`에 `function`을 전달하고, 부모 Component에서 `state`가 바뀔 때 <br/>
	자식 Component에서 어떤 일이 발생하는 지 확인해보자.

``` jsx
const Btn = ({BtnName}) =>{/*...*/}

const App = () => {
	const [value, setValue] = React.useState("Save");
	
	function ChangeValue(){
		setValue("Value Changes");
	}

	return (
		<div>
			<Btn BtnName={value} ChangeValue={ChangeValue}/>
			<Btn BtnName="Confirm"/>
		</div>
	);
};

```

- `App` Component에 `state`와 `state`의 값을 변경하는 함수 `ChangeValue`를 추가하였다.
- 그리고 `Btn` Component에 함수 `ChangeValue`를 `prop`으로 전달하였다.

- 여기서 `<Btn />`에 전달한 `onClick`은 `EventListener`가 아니라 <br/>
	`event`를 실행시키는 함수가 Property로 전달한 것이다. <br/>
	
- 즉, 기존 `JSX` 문법에서 `HTML` 태그 자체에 `event`를 추가한 식이 아닌 <br/>
	단순히 `Btn` Component에 `BtnName`, `ChangeValue`이라는 `Property`를 추가한 것 뿐이다.
	
- `Save` 버튼을 클릭했을 때, 버튼의 텍스트가 바뀌게 하려면 <br/>
	`Btn` Component에 전달된 **ChangeValue**라는 `Property`의 값인 `ChangeValue` 함수를 <br/>
	`Btn` Component에서 `EventListener`로 실행해야 한다.

``` jsx
//<script type="text/babel">
const Btn = ({BtnName, ChangeValue}) => {
	return (
		<button
			style={{
				backgroundColor: "green",
				color: "white",
				padding: "10px",
				border: "3px",
				borderRadius: "10px",
				margin: "5px"
			}}
			onClick={ChangeValue}
        >	
			{BtnName}
		</button>
	);
};

const App = () => {
	const [value, setValue] = React.useState("Save");
	
	function ChangeValue(){
		setValue("Value Changes");
	}

	return (
		<div>
			<Btn BtnName={value} ChangeValue={ChangeValue}/>
			<Btn BtnName="Confirm"/>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

-  `App` Component에서 `<Btn />` 함수를 호출할 때 <br/>
	`BtnName`, `ChangeValue` 등의 속성들을 추가해도 이게 `Btn`에 적용되지는 않는다.

- `App` Component에서 전달 받은 `BtnName`, `ChangeValue`는 단순한 객체 Property로 <br/>
	`Btn` Component의 `props`에 남아있을 뿐이고 이를 `Btn` Component 내부에서 <br/>
	해당 Property (`App` Component 전달 받은 것)를 꺼내와서 사용해줘야 한다.

---
## 2. `React.memo()`를 통해 Re-rendering되지 않을 Component 지정하기

``` jsx
//<script type="text/babel">
const Btn = ({BtnName, ChangeValue}) => {
	return (
		<button
			style={{
				backgroundColor: "green",
				color: "white",
				padding: "10px",
				border: "3px",
				borderRadius: "10px",
				margin: "5px"
			}}
			onClick={ChangeValue}
        >	
			{BtnName}
		</button>
	);
};

const App = () => {
	const [value, setValue] = React.useState("Save");
	
	function ChangeValue(){
		setValue("Value Changes");
	}

	return (
		<div>
			<Btn BtnName={value} ChangeValue={ChangeValue}/>
			<Btn BtnName="Confirm"/>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//</script>
```

- 위의 기존 코드에서 아래 구문을 `Btn` Component에 추가해보자. <br/>
	`console.log(BtnName, " 요소가 랜더링 됐습니다.");`

```
Save 요소가 랜더링 됐습니다.
Confirm 요소가 랜더링 됐습니다.

> 'Save' 버튼 클릭

Value Changes 요소가 랜더링 됐습니다.
Confirm 요소가 랜더링 됐습니다.
```

- **Save** 버튼을 클릭했을 때, `state` 값을 변경하는 `ChangeValue` 함수가 실행된다. <br/>
	해당 함수가 실행되면 `state`의 값을 바꾸는 `setValue` 함수에 의해 <br/>
	`state`의 값이 `Save`에서 `Value Change`로 바뀌고 Re-Rendering된다.

- 여기서 `state`를 참조하는 첫 번째 `Btn` 요소, **Save** 버튼은 `state` 값이 바뀜에 따라 <br/>
	이를 참조하는 `Btn` 요소는 당연히 Re-rendering되지만 <br/>
	`state`를 참조하지 않는 두 번째 `Btn` 요소, **'Confirm'** 버튼까지 같이 Re-rendering됐다.

- 이는 `ReactJS`의 규칙에 따라 `App` Component에서 `state` 값이 바뀌면 <br/>
	해당 Component의 하위 요소인 `<Btn />` Component까지 같이 Re-rendering된다.
	
- 그리고 이 과정에서 방금 전 **'Confirm'** 버튼이 Re-rendering된 것처럼 <br/>
	불필요한 Rendering이 발생할 수도 있는데 이런 경우는 `React.memo()` 통해서 <br/>
	`prop`의 변경이 일어난 부분에만 Rendering 발생 시킬 수 있다.

- 아래 코드를 추가하고, 웹 페이지를 새로 고침하고 <br/>
	console 창에 출력 되는 메시지를 확인해보자. <br/>
	
``` jsx
//const Btn = ({BtnName, ChangeValue}) => {...}

const MemorisedBtn = React.memo(Btn); //New

const App = () => {
	const [value, setValue] = React.useState("Save");
	
	function ChangeValue(){
		setValue("Value Changes");
	}
	/*
	return (
		<div>
			<Btn BtnName={value} ChangeValue={ChangeValue}/>
			<Btn BtnName="Confirm"/>
		</div>
	);
	*/

	return (
		<div>
			<MemorisedBtn BtnName={value} ChangeValue={ChangeValue}/>
			<MemorisedBtn BtnName="Confirm"/>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

```
Save 요소가 랜더링 됐습니다.
Confirm 요소가 랜더링 됐습니다.

> 'Save' 버튼 클릭

Value Changes 요소가 랜더링 됐습니다.
```

- `<App />` Component의 `state`를 참조하는 'Save' 버튼만 Re-rendering되고 <br/>
	'Confirm' 버튼은 Re-rendering되지 않는 것을 확인할 수 있다.

- [`React.memo()` 정리 글](/React_Study/React_Theory/React_Memo.md)
	
---
## 3. `prop` 타입 지정하기

``` jsx
function Btn({text, Change_BtnName, fontSize}){
    <button
        onClick={ Change_BtnName }
        style={{
            backgroundColor: "Green",
            color: "White",
            padding: "10px 20px",
            borderRadius: 10,
            border: 0,
            margin: "5px",
            fontSize: fontSize
        }}
    >
        {text}
    </button>
}

function App(){
    return (
        <div>
            <Btn text="Save" fontSize={18} />
            <Btn text={20} fontSize="Hello" />
        </div>
    );
}
```

- 위의 예제처럼 `text`, `fontSize` Property에 잘못된 값을 전달했다고 가정해보자.

- 물론 결과적으로 Error가 발생하지는 않지만 <br/>
    우리가 원하는 형태의 Component가 return되지는 않는다.
- 즉, 코드를 작성하는 중에 실수를 했고 이를 웹 페이지가 Rendering된 후에 알았다는 것이다.

- 하지만 여기서 'text'와 'fontSize'에 들어갈 data의 type이 지정됐다면 어떨까?
- 개발자인 우리는 'text'에 `string`이, 'fontSize'에 `number`가 들어가야 하는 것을 <br/> 
	알고 있지만 `ReactJS`는 이를 모른다.
- 다행히 React는 `PropTypes`이라는 자체 타입 검사 기능이 존재한다.

> `React v15.5`부터 `React.PropTypes`가 다른 패키지로 이동했다고 한다. <br/>
> 대신 **[`prop-types` 라이브러리](https://www.npmjs.com/package/prop-types)**  이용하면 된다고 한다. <br/><br/>
>**[PropTypes와 함께 하는 타입 검사](https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html) 참조 / React 공식 문서**

---

- `PropTypes` 패키지는 `number`, `string`, `boolean`, `array` 등의 <br/>
   각기 다른 데이터 타입을 검사할 수 있게 해준다.
- `ReactJS`에 내장된 자체 타입 검사 기능이다.

``` jsx
function Btn({text, Change_BtnName, fontSize}){/*...*/}

Btn.propTypes = {
        text: PropTypes.string,
        fontSize: PropTypes.number,
    };

function App(){
    return (
        <Btn text={20} fontSize="Hello">
    );
}
```
- `propTypes`을 통해 `text`와 `fontSize`에 저장되는 값의 타입을 <br/>
    각각 `string`, `number` 타입으로 지정하였다.
- 이후 `App Component`에서 `Btn` 함수에 전달될 인자의 값을 위와 같이 전달
- Component는 문제 없이 Rendering되지만 아래와 같은 경고 메시지가 출력 된다.

```
react-dom.development.js:73 Warning: 
Failed prop type: Invalid prop `fontSize` of type `string` 
supplied to `Btn`, expected `number`
```

- 앞에서 `prop`의 `type`을 `text: string`, `fontSize: number`로 지정했지만 <br/>
  Btn 함수를 호출할 때, `text`의 값을 숫자 20, `fontSize`의 값을 문자열 **"Hello"** <br/>
   전달하였기 때문에 타입이 불일치 하다는 경고 메시지가 출력 됐다.

- `text`, `fontSize`의 값을 propTypes에서 지정한 타입과 일치하게 수정해보자.

``` jsx
function Btn({text, Change_BtnName, fontSize}){}

Btn.propTypes = {
        text: PropTypes.string,
        fontSize: PropTypes.number,
    };

function App(){
    //return ( <Btn text={20} fontSize="Hello"> );
    return (<Btn text="Continue" fontSize={20}>);
}
```
- `text`, `fontSize` prop에 전달되는 값을 수정하였다.
- 더이상 타입 불일치 경고가 발생되지 않는다.

- 추가적으로 지금까지 작성한 코드는 <br/>
    `prop`에 값이 전달되지 않아도 error가 발생하지 않았다. <br/>
    (`Change_BtnName`에 값을 전달하지 않아도 error가 발생하지 않았음.)

- 경우에 따라서 특정 `prop`에 값이 전달되지 않으면 경고가 보이도록 할 수 있다.
- `prop`에 `.isRequired`를 추가하면 해당 `prop`에 값이 전달되지 않으면 <br/>
  아래와 같은 경고를 발생시킨다.

``` jsx
function Btn({text, Change_BtnName, fontSize}){}

Btn.propTypes = {
        //text: PropTypes.string,
        text: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
    };

function App(){
    //return ( <Btn text={20} fontSize="Hello"> );
    return (
        <div>
            <Btn text="Continue" fontSize={20}>
            <Btn fontSize={20}>
        </div>
    );
}
```

```
react-dom.development.js:73 Warning: 
Failed prop type: The prop `text` is marked as required in `Btn`, 
but its value is `undefined`.

Btn 함수에서 `text` prop은 required(필수)로 명시했다.
근데 실제로 전달된 값은 'undefined'이다.
```

- 위와 같은 형식의 경고 메시지가 console에 출력된다.
- 이제 두번째 `Btn` 컴포넌트 호출문에서 `text` prop의 값을 전달해주자.
- 그러면 위와 같은 경고 메시지가 더이상 출력되지 않을 것이다.
  
