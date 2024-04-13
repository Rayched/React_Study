
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
	//이제 Route 컴포넌트 사이에 자식 컴포넌트를 추가하지 않고
	//element prop에 자식 컴포넌트를 할당하도록 바뀌었기 때문에
	//이에 맞춰서 코드 Update
}
```

- `react-router-dom` 최신 버전으로 업데이트하고 <br/>
	`App` 함수 코드도 최신 버전에 맞는 문법으로 수정하였다.
- 이후 예제를 실행, 영화 제목을 클릭하면 <br/>
	 URL이 바뀌고 이에 맞춰서 웹 페이지도 갱신되는 것을 확인할 수 있다.

---

### Dynamic URL Update

``` jsx
<Router>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/movie/:id" element={<MovieDetail />} />
	</Routes>
</Router>
```

- 기존에 영화 제목을 클릭하면, URL이 '/movie'로 바뀌고 <br/>
	`MovieDetail`이라고 적힌 Component가 Rendering된다.
- `React Router`에서는 `Dynamic URL (동적 URL)`이라는 기능을 지원한다.
- 쉽게 이야기 하자면 URL이 변수를 받는 것이다.
- `영화진흥위원회 Open API`로 가져온 영화의 대표 코드를 (`movieCd`) <br/>
	`Movie` 함수의 인자 'id'에 전달한다. 
- `MovieDetail.js`에서 `React-router`의 함수 `useParams` Import한다.
- 해당 함수는 URL에 입력된 id 값을 변수에 저장한다.
	
- 이후 Home에서 영화 제목을 클릭하면, 해당 영화의 대표 코드가 URL의 ':id'로 전달된다.

---

```
Movie App Logic 정리

1. 홈 화면에 주간 박스 오피스 1 ~ 10위까지의 정보가 출력된다.
	(영화진흥위원회 Open API / 주간 박스오피스 api)
	(2024.02.24 기준)
2. 홈 화면에서 영화 제목 클릭 시, 영화 상세 정보를 보여주는 페이지 이동 (MovieDetail)
	URL을 확인하면 '/Movie/:Id'로 넘어가진 것을 확인 가능
3. 여기서 ':Id'에 입력된 Parameter을 MovieDetail에서 가져옴
4. Id == 'movieCd' (영화 대표 코드)
5. 영화의 상세 정보를 출력하기 위해서는 movieCd, Id 값을 참조할 수 있어야 한다.
6. 그걸 위해서 'useParams' 함수를 통해 URL에 입력된 값을 가져옴.
```

- 영화 진흥 위원회 Open API인 `영화 상세 정보`를 가져온다.

```
http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3a15c5393ac14d11f6b132d6a07f330c&movieCd=${id}
```

- 특정 영화의 정보를 가져오기 위해서는 해당 영화의 코드를 입력해야 한다. (`movieCd`)
- 우리가 원하는 것은 홈 화면에서, 영화 제목을 클릭하면 <br/>
	해당 영화의 상세한 정보가 담긴 페이지가 나와야 한다.
- 앞에서 가져온 id 값을 `movieCd = ${id}` 전달한다.
- 그러면 서버에서 전달한 코드와 일치하는 영화의 정보를 응답 처리
- 서버에서 전송된 영화 정보를 Console 창에서 확인
- 문제 없이, 원하던 정보를 응답으로 받은 것을 확인할 수 있다.

```
1. actors: Array(4)

//주연 배우
1. 0: {peopleNm: '최민식', peopleNmEn: 'CHOI Min-shik', cast: '', castEn: ''}
2. 1: {peopleNm: '김고은', peopleNmEn: 'KIM Go-eun', cast: '', castEn: ''}
3. 2: {peopleNm: '유해진', peopleNmEn: 'Yoo Hai Jin', cast: '', castEn: ''}
4. 3: {peopleNm: '이도현', peopleNmEn: '', cast: '', castEn: ''}
5. length: 4
6. [[Prototype]]: Array(0)

3. audits: [{…}] //장르
4. companys: (4) [{…}, {…}, {…}, {…}] //배급사
5. directors: Array(1)

1. 0: {peopleNm: '장재현', peopleNmEn: 'JANG Jae-hyun'} //감독
2. length: 1
3. [[Prototype]]: Array(0)

7. genres: (2) [{…}, {…}]
8. movieCd: "20234675" //영화 대표 코드
9. movieNm: "파묘" //제목
10. movieNmEn: "Exhuma"
11. movieNmOg: ""
12. nations: [{…}]
13. openDt: "20240222" //개봉 일
14. prdtStatNm: "개봉"
15. prdtYear: "2024"
16. showTm: "133" //상영 시간
17. showTypes: (4) [{…}, {…}, {…}, {…}]
18. staffs: (4) [{…}, {…}, {…}, {…}]
19. typeNm: "장편"
20. [[Prototype]]: Object

3. source: "영화진흥위원회"
```


- 배열 내 객체의 값을 꺼내 오는 방법을 찾아야 한다...
- 감독, 출연 배우 등의 정보도 출력하기 위해서 필요함.
- 기존 방법은 웹 페이지 새로고침 시 Error가 발생하였음.
