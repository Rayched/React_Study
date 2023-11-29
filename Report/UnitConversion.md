
# Unit Conversion (단위 변환기) 구현하기

- **📔 Reference**
    - **[ReactJS로 영화 웹 서비스 만들기 / 노마드 코더 Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)**

---

### 💻 Part 1

#### 📆 2023.11.28 화요일


#### `<label>`, `for` 속성

- `<label>` 태그의 `for` 속성은 label과 결합시킬 요소를 명시하는 속성이다.

    ``` html
    <label for="name">이름</label>
    <input id="name" placeholder="이름을 입력해주세요."/>
    ```

<br/>

- `HTML`의 특정 속성 (`class`, `for` 등)을 그대로 사용하면 <br/>
    아래와 같은 경고 문구가 나오는 것을 확인할 수 있다. (하단 이미지 참조)

    ``` jsx
    <h2>시간 변환 (시 / 분)</h2>
    <div>
        <label for="minute">Minute</label>
        <input id="minute" placeholder="Minute" type="number"/>
    </div>
    <div>
        <label for="hour">Hour</label>
        <input id="hour" placeholder="Hour" type="number"/>
    </div>
    ```
    ![예약어 이슈](/Report/Ref_Images/html의%20특정%20속성과%20js의%20예약어가%20같을%20때%20발생하는%20경고창.png)

    - `<label>` 태그의 `for` 속성을 그대로 입력했을 때 <br/>
     `JavaScript`에서 반복문 `for`이 이미 존재하고 있기 때문에 <br/>
     위와 같은 경고가 발생한다.
    - `react.development.js`를 사용하고 있어서 발생하는 경고창으로 <br/>
     `react.production.min.js`를 사용하고 있으면 문제가 생기지 않는다.
    
    - 물론 프로그램 실행 중에 이러한 issue가 발생해선 안되기 때문에 <br/>
        `<label>` 태그의 `for` 속성을 `htmlFor` 속성으로 수정해주자.
        
    ``` jsx
    <div>
        <label htmlFor="minute">Minute</label>
        <input id="minute" placeholder="Minute" type="number">
    </div>
    ```
---
#### `<input>` 태그에 입력한 값(`value`) 가져오기

---
#### `React` 개발 모드와 배포 모드

- `React.development.js`는 개발 모드를 의미하고 <br/>
    `React.production.js`는 배포 모드를 의미한다.
    
    - `React.development.js`는 개발 모드의 React, ReactDOM을 가리키며 <br/>
        해당 모드는 개발 중에 버그로 이어질 수 있는 요소들에 대해서 <br/>
        경고를 보내는 검증 코드가 포함되어 있다.
    - `React.production.js`는 말 그대로 배포 모드의 React, ReactDOM으로 <br/>
        경고를 보내는 검증 코드가 개발 모드에 비해 적기 때문에 <br/>
        전체적인 용량이 적게 들고, 배포하기 용이하다.

---

### 💻 Part 2

#### 📆 2023.11.29 수요일

#### 💻 `minute`에 입력한 값을 '시 Hour' 단위로 변환

- **금일 작업 내용**
	- `minute` 입력 창에 입력한 값을 '**시(Hour)**' 단위로 변환해준다. <br/>
	`minute`에 입력한 값을 60으로 나눈 값을 해당 입력 요소의 `value`로 갖는다.
	
``` jsx
	<input 
		id="hour"
		placeholder="Hour"
		type="number"
		value={minute / 60}
	/>
```

- `Reset` 버튼 추가, 버튼을 누르면 `Minute` 입력 창에 입력한 값이 0으로 돌아온다.
- 다만 `minute` 만 입력이 가능하고, `hour`는 입력이 불가능하다.
- 이래서는 단위 변환기라고 할 수 없기 때문에 기능 하나를 더 추가할 것이다.
- `[Conversion]` 버튼을 클릭하면 `hour`를 입력 가능하게 해주고 <br/>
	다시 버튼을 클릭하면 `minute`을 입력할 수 있는 기능을 추가해보자.

