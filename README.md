# React_Study

`ReactJS` 공부 내용을 (단순 정리, Source Code) Backup 해두는 Git Repository 입니다. <br/>

**[Github Repository](https://github.com/Rayched/React_Study)** <br/>
**[Tistory Blog](https://rclogstorage.tistory.com/)**

## 📔 Reference

> **[ReactJS로 영화 웹 서비스 만들기 / Nomad Coders](https://nomadcoders.co/react-for-beginners/lobby)** <br/>
> **[처음 만난 React / 인프런](https://inf.run/YehVc)** <br/>
> **[React 공식 문서](https://ko.legacy.reactjs.org/docs/getting-started.html)** <br/>

---
## 1. React Basic

### React 이론

- **[React의 정의](/React_Theory/React_정의.md)**
- **[React 개발 환경 설정](/React_Theory/React_개발_환경_설정.md)**
- **[React Component 생성 방법](/React_Theory/React_Component_생성_방법.md)**
- **[JSX](/React_Theory/React_JSX.md)**
- **[state](/React_Theory/React_State.md)**
- **[prop](/React_Theory/React_props.md)**
- **[useEffect](/React_Theory/React_useEffect.md)**
- **[cleanup]()**

---

### React Basic 예제

#### 버튼 클릭 예제 Part 1 (~JSX)
- **[version 1 / HTML, JavaScript로 구현한 버전](/Exam/JSX/NonUseReact/exam1.html)**
- **[version 2 / React 맛보기 예제](/Exam/JSX/ReactBasic/exam3.html)**
- **[version 3 / JSX](/Exam/JSX/JSX_Exam/exam5.html)**

---

#### `state` 예제
- **버튼 클릭 예제 Part 2**
    - 버튼과 버튼 클릭 횟수를 기록해두는 예제
    - 기본적인 디자인은 크게 다르지 않음. (소스코드만 약간 다름)
    - **[version 1 / state 1](/Exam/state/ButtonClick/exam1.html)**
    - **[version 2 / state 2](/Exam/state/ButtonClick/exam2.html)**
    - **[version 3 / state 3](/Exam/state/ButtonClick/exam3.html)**

- **단위 변환기 / Unit Conversion**
    - **[단위 변환기 / Time & Meter](/Exam/state/UnitConversion.html)**

---

#### `props` 예제
- **버튼 클릭 예제** 
    - 버튼을 클릭하면, 버튼의 텍스트가 바뀌는 예제
    - **[예제 링크](/Exam/prop/propExam.html)**

- **버튼 클릭 예제 (좀 더 개선된 version)**
    - `React.memo()`를 활용해서 버튼 Rendering 개선
    - **[예제 링크](/Exam/prop/memoExam.html)**

---

#### `useEffect` 예제
- **[`useEffect` 예제](/Exam/useEffect/useEffectExam.html)**
- **[`cleanup` 예제](/Exam/useEffect/CleanupExam.html)**
