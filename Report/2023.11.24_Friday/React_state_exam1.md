<!-- React Study - state 1번 예제 Report -->

# \[React\] `state` 첫번째 예제 Report

- **📔 Reference**
    - **[ReactJS로 영화 웹 서비스 만들기 / 3.0 Understanding State](https://nomadcoders.co/react-for-beginners/lobby)**
---

### 💻 구현 과제

- **버튼 클릭 예제 (기존 코드, `HTML`, `Vanilla JS`)**

``` html
<html>
    <head></head>
    <body>
        <div id="Default_Form">
            <h4>
                [React] 버튼 클릭 예제
            </h4>
            <p>
                'HTML'과 'Vanilla JS' 만을 사용해서 <br/>
                버튼 클릭 예제를 구현하였다.
            </p>
            <p>
                'Click'이라고 적힌 버튼을 클릭할 때마다 <br/>
                하단의 '버튼 클릭 횟수 : 0'의 숫자 값이 올라간다.
            </p>
            <hr/>
        </div>
        <div>
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
