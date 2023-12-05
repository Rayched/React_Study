
### 기존 방법 (`<script>` import)

- `index.html` 파일에서 `React App` 개발하려면 `React`와 `ReactDOM`을 Import 해야 한다.
- 아래 두 `<scirpt>` 태그를 Import 하는 것으로 `React` 개발을 시작할 수 있다.

``` html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- 추후에 `React`로 개발한 웹 페이지를 배포한다면 <br/>
	`React`, `ReactDOM`을 Import한 `<script>` 태그의 `development.js` 부분을 <br/>
	`production.min.js` 수정해주도록 하자.

- 추가적으로 이 글을 보는 시점에서 `React`, `ReactDOM`이 최신 버전이 아닐 수도 있으니 <br/>
  아래 링크로 들어가서 `React`, `ReactDOM`을 Import하도록 하자.
  
  [웹 사이트에 React 추가하기](https://ko.legacy.reactjs.org/docs/add-react-to-a-website.html)

---
#### `JSX` 문법을 사용할 경우
- `JSX` 문법을 사용해서 `React Component`를 개발한다면 `Babel`을 Import 해줘야 한다.

---

### `create react app`

#### 1. `node.js` 설치하기

- 먼저 아래 링크로 들어가서 최신 버전의 `node.js` 설치해주자.
- **`node.js` 설치 url**
- 내 컴퓨터에 `node.js`가 설치된 상태라면 <br/>
	`명령 프롬포트` 실행, `node -v` 입력 후 `Enter` Key 누르면 <br/>
	내 컴퓨터에 설치된 `node.js`의 버전을 확인할 수 있다.
	
- 현재 내 컴퓨터에 설치된 `node.js` 가 최신 버전이 아니라면 <br/>
	위의 링크로 들어가서 최신 버전의 `node.js`를 설치하도록 하자.

- `node.js` 설치를 완료했다면, 방금처럼 `명령 프롬포트` 실행해서 <br/>
	아래 두 명령어를 입력한 후 `Enter` 눌러보자. <br/>
	(`node.js` 버전 및 `npx` 사용 가능 여부 확인)
	
``` shell
node -v
npx 
```

---

#### 2. `React` 설치하기
- `node.js` 최신 버전 설치가 완료됐다면 아래 명령어를 입력한 다음 `Enter` 
- 첫 글자를 대문자로 하면 error가 발생하니, 소문자로 해주자.
``` shell
npx create-react-app blog
#npx create-react-app 'Project_Name'
```

- `create react app` 명령어는 `React`의 개발 초기 환경을 하나 하나 설정하지 않아도 <br/>
	`ReactJS` 개발을 바로 시작할 수 있는 환경을 만들어준다.
- `React App` 개발할 때, `React` 라이브러리 외에도 <br/>
	`Webpack`, `Babel` 등의 기타 다른 `Library`가 필요하다고 한다.
	
```
'Babel' => JSX 문법으로 React App을 개발할 때 필요한 Library
			html 파일에서 React App을 개발할 때
		    `<script src="">` 형식으로 Import 했었다.

'Webpack' => React App을 개발할 때 사용되는 여러 개의 js 파일들을
			 하나로 합쳐주는 Module Bundler라고 한다.
			 (Webpack에 대해서는 아직 잘 모르겠다..)
```

- React 초기 개발 환경에 필요한 파일들의 설치가 완료된 <br/>
   프로젝트의 구성은 다음과 같다.
   
```
/exam
└ /node_modules
└ /public
	└ favicon.ico
	└ index.html
	└ logo192.png
	└ 1ogo512.png
	└ manifest.json
	└ robots.txt
└ /src
	└ App.css
	└ App.js
	└ App.test.js
	└ index.css
	└ index.js
	└ logo.svg
	└ reportWebVitals.js
	└ setupTests.js
└ .gitignore
└ package-lock.json
└ package.json
└ README.md
```

- **`node_modules`** 
	- `node.js` 패키지 구성 요소 중 하나
	- 외부 Module을 저장하는 폴더 (`React`도 여기에 해당된다.)
	
- **`package.json, package-lock.json`**
	- 패키지의 설정과 관련된 파일
	- 패키지들을 연결하는 역할을 하는 파일이므로 신중하게 다뤄야 한다.
	- **`package.json`** 프로젝트의 이름, 주소, 버전을 설정할 수 있고 <br/>
	   이 외에도 `React`의 버전을 지정할 수도 있다. <br/>
	   (`dependencies`에서 확인 가능)
	- `package.json / script` 설정에 있는 명령어는 <br/>
	  `npm run '명령어'` 나 `npm '명령어'`로 입력하는 것으로 사용 가능하다.

- **`/public`**
	- `index.html` 파일이 이 폴더 안에 저장되어 있다.
	- 해당 폴더 내부의 파일들은 `Webpack`이 후 처리를 하지 않고 <br/>
	   그대로 `/build` 폴더에 복사 된다.

- **`/src`**
	- **Source Code**의 약어
	- `.js`, `.css` 등의 코드가 저장된 폴더
	- `npm build` 명령어로 `React`로 개발한 프로젝트를 Build할 때 <br/>
	  `Webpack`으로 처리된다.

---

#### Extra. `Webpack`이란 무엇인가?

---

#### 3. `React` 기본 예제 실행

- `CRA` 명령어로 `React` 개발 환경 설치가 완료됐다면 <br/>
	잡다한 파일들이 되게 많이 보일 것이다.
- 해당 파일들은 `React` 견본 예제이다.
- `React`를 이제 막 배우는 지금 단계에서는 당장 필요하지 않은 <br/>
   파일들은 정리할 필요가 있다.
- 그래도 한 번은 실행해보고 정리하도록 하자.
- 아래 명령어를 입력하면, `React` 기본 예제가 실행된다.

``` shell
npm run start
npm start
```

- 위의 명령어를 입력하고, `Enter` 키를 눌렀는데 실행이 안된다면
  `Terminal`을 `CRA` 명령어로 생성한 프로젝트 폴더에서 실행했는지 확인해보자.
  
``` shell
PS C:\Users\reyic\OneDrive\바탕 화면\TestCode\exam>
#create react app으로 생성한 프로젝트의 이름을 exam으로 설정했다.
#VSC 기준으로 Explorer 탭의 프로젝트 폴더에서 마우스 우클릭
#'Open in Intergrated Terminal'을 클릭하면
#해당 프로젝트 폴더에서 Terminal이 켜질 것이다.
```

- `CRA` 명령어로 생성한 `React` 프로젝트 폴더에서 `Terminal` 실행한 상태에서 <br/>
  방금 전 입력한 `npm run start / npm start` 명령어를 다시 입력해보자.
- 그러면 아래 이미지처럼 `React` 견본 예제가 실행되는 것을 확인할 수 있다.

![React_기본_예제_실행](/Ref_Imgs/ReactDefExamStart.png)

- `App.js`에서 텍스트 수정한 예시도 추가 필요

---
#### 4. Project 폴더 정리 (선택)

- `React` 기본 예제도 실행해봤으니, 이제 Project 폴더를 정리해보자.

``` shell
/exam
└ /node_modules
└ /public
	#└ favicon.ico
	└ index.html
	#└ logo192.png
	#└ 1ogo512.png
	#└ manifest.json
	#└ robots.txt
└ /src
	#└ App.css
	└ App.js
	#└ App.test.js
	#└ index.css
	└ index.js
	#└ logo.svg
	#└ reportWebVitals.js
	#└ setupTests.js
└ .gitignore
└ package-lock.json
└ package.json
└ README.md
```

- 여기서 주석 처리된 파일들을 전부 삭제하도록 하자. <br/>
- `/public` 폴더에서는 `index.html` 파일만 남기고 전부 삭제
- `/src` 폴더에서는 `App.js`와 `index.js` 파일만 남기고 전부 삭제한다.

```
/exam
└ /node_modules
└ /public
	└ index.html
└ /src
	└ App.js
	└ index.js
└ .gitignore
└ package-lock.json
└ package.json
└ README.md
```

- 이후 `index.html`, `App.js`, `index.js`에서 삭제한 파일과 관련된 코드도 지워두자.
- `index.html`, `App.js`, `index.js` 파일을 확인해보면 코드가 크게 다르지 않다는 것을 알 수 있다.

``` jsx
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//`React18` 버전이 업데이트되면서 React Component를 랜더링할 때
//'ReactDOM.render()'로 입력하는 방식은 더이상 사용되지 않는 것 같다.
//대신에 `ReactDOM.createRoot()`로 `React Component`를 랜더링할
//'root' 요소를 지정하는 것 같다.
//여기에 대해서는 나중에 Component 랜더링에 대해 다룰 때 설명하도록 하겠다.
```

``` jsx
//App.js

function App() {
  return (
    <div className="App">
      <h4>Hello Everyone</h4>
      <p>ReactJS 강의를 들으면서 개발했던 예제들을 모아둔 블로그입니다.</p>
      <div className="GitRepositoryURL">
        <a href="https://github.com/Rayched/React_Study">
        'React_Study' / Project Git Repository
        </a>
      </div>
    </div>
  );
}

export default App;
```

``` html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <header id="Blog_Title">
      <h2>Blog: React Exam Code's</h2>
      <hr/>
    </header>
    <div id="root"></div>
  </body>
</html>
```

