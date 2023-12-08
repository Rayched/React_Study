# [React] `props`

### 📔 Reference
>- **[ReactJS로 영화 웹 서비스 만들기 / 노마드 코더 Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**
>- **[Component와 Props](https://ko.legacy.reactjs.org/docs/components-and-props.html)**
>- **[React 최상위 API/React.memo](https://ko.legacy.reactjs.org/docs/react-api.html#reactmemo)**
>- **[PropTypes와 함께 하는 타입 검사](https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html)**


---
## 1. `prop` 
---
## 2. `React.memo()`를 통해 Re-rendering되지 않을 Component 지정하기
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

- 위의 예제처럼 'text', 'fontSize' Property에 잘못된 값을 전달했다고 가정해보자.
- 물론 결과적으로 Error가 발생하지는 않지만 <br/>
    우리가 원하는 형태의 Component가 return되지는 않는다.
- 즉, 코드를 작성하는 중에 실수를 했고 이를 웹 페이지가 랜더링된 후에 알았다는 것이다.

- 하지만 여기서 'text'와 'fontSize'에 들어갈 data의 type이 지정됐다면 어떨까?
- 개발자인 우리는 'text'에 `string`이, 'fontSize'에 `number`가 들어가야 하는 것을 <br/> 알고있지만 `ReactJS`는 이를 모른다.
- 다행히도 React는 `PropTypes`라는 것이 존재한다.

> `React v15.5`부터 `React.PropTypes`가 다른 패키지로 이동했다고 한다. <br/>
> 대신 **[`prop-types` 라이브러리](https://www.npmjs.com/package/prop-types)**를 이용하면 된다고 한다. <br/><br/>
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
- `propTypes`를 통해 `text`와 `fontSize`에 저장되는 값의 타입을 <br/>
    각각 `string`, `number`로 지정하였다.
- 이후 `App` 컴포넌트에서 `Btn` 함수에 전달될 인자의 값을 위와 같이 전달
- Component는 문제없이 랜더링되지만 아래와 같은 경고 메시지가 출력된다.

```
react-dom.development.js:73 Warning: 
Failed prop type: Invalid prop `fontSize` of type `string` 
supplied to `Btn`, expected `number`
```

- 앞에서 `prop`의 `type`을 `text: string`, `fontSize: number`로 지정했지만 <br/>
  Btn 함수를 호출할 때, `text`의 값을 숫자 20, `fontSize`의 값을 문자열 "Hello"로 전달하였기 때문에 타입이 불일치하다는 경고를 하고있다.

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
  