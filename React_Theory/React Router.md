
- 페이지를 전환하는 것
- 사용자가 입력한 URL에 맞는 페이지로 넘어갈 수 있게 하는 것

``` shell
npm install react-router-dom
# React Router 설치

npm install react-router-dom@5.3.0
# 강의에서 사용한 React router는 ver 5.3.0이므로
# 해당 버전으로 설치
```

- Home Route (모든 영화 정보 출력)
- Movie Route (영화 하나의 정보 출력)

---

- 기존 영화 정보 (제목, 개봉 일, 누적 관객 수) 보여주는 코드를 <br/>
	 `App.js`에서 `Home.js` 파일로 이동

- `App.js` : `Router`를 Rendering 해야 한다.
- `Router` : 사용자가 입력한 `URL` 에 따라 `Home.js`나 `MovieDetail.js` Rendering 할 것 이다.

---

``` js
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
```

- 위에 적어 놓은 Component들을 `App.js`에 Import 한다.
- 그 다음 `App` 함수에 아래 Element를 추가한다.

``` jsx

function App(){
	return (
		<Router>
			<Switch>
				<Route path="/movie">
					<MovieDetail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
```

- `<Switch>` 
	- `Route` 찾는 일을 하는 요소 (`Route` == `사용자가 입력한 URL`)
	- 한 번에 하나의 `Route`만 Rendering하는 요소
	
- `<Route>` 
	- 

---

- `BrowserRouter`와 다른 `Router` 간의 차이는 `URL` 값에 있다.
- `BroswerRouter`: `http://localhost:3000/movie`  <br/>
	- 일반적인 `URL`의 생김새를 가지고 있다.
- 다른 `Router`의 경우: `http://localhost:3000/#/movie` (`HashRouter`)
	- `BrowserRouter`와는 다르게 중간에 `#(Hash)`가 붙었다는 차이점이 존재한다.

---

#### 영화 제목 클릭 시, 해당 영화의 정보가 담긴 페이지로 넘어가기


- `HTML`의 `<a>` 태그를 사용하지 않고, 영화 제목을 클릭하면 <br/>
	해당 영화에 대한 정보가 담긴 페이지로 넘어가는 기능 구현하기

- `Component/movie.js`에 `<Link>` 태그를 제목에 추가
- 이후 제목을 클릭하면 URL이 `/movie`로 변경, 웹 페이지도 갱신 된다.
- 하지만 실제 결과물을 보면,  URL은 변경됐지만 (`/` → `/movie`) <br/>
	웹 페이지는 갱신이 안된 것을 확인할 수 있다.
- 이는 현재 사용 중인 `create-react-app`과 `react-router-dom` 5.3 버전이 <br/>
	충돌을 일으키기 때문이다.

##### 해결 과정

- `movie.js`에 `react-router-dom`의 `Link` Component를 Import하고
- `movie` 함수 내부의 제목 요소에 `<Link>` 태그를 추가하였다. <br/>
	(`HTML`의 `<a>` 태그와 같은 역할을 한다.)

``` jsx
function Movie({MovieName, openDate, AudiCount}){
	return (
		<div>
			<h4>
				<Link to="/movie">
					영화 명: {MovieName}
				</Link>
			</h4>
			<p>개봉 일: {openDate}</p>
			<p>누적 관객 수: {AudiCount}명</p>
		</div>
	);
}
```

- `React-router-dom` Version 6부터 `<Switch>`는 더 이상 사용되지 않는다고 한다.
- 그리고 이 역할은 `<Routes>`가 대신 수행하게 된다.

- 추가적으로 `<Routes>`가 최적의 경로 배정을 하기 때문에 <br/>
	`<Route>` 태그의 `exact` 속성도 더이상 사용되지 않는다. (공식 문서 참조)

- 이제 이에 맞춰서 `App` 함수도 아래와 같이 수정해보자.

``` jsx
import {
	BrowserRouter as Router,
	Route,
	//Switch
	Routes, //New
} from "react-router-dom"

function App(){
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie" element={<MovieDetail />} />
			</Routes>
		</Router>
	);
}
```

- `react-router-dom` 최신 버전으로 업데이트하고 <br/>
	`App` 함수 코드도 최신 버전에 맞는 문법으로 수정하였다.
- 이후 예제를 실행, 영화 제목을 클릭하면 <br/>
	 URL이 바뀌고 이에 맞춰서 웹 페이지도 갱신되는 것을 확인할 수 있다.

---
