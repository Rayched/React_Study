
### `State`

#### 참고 예시

- `Vanilla JS` 만으로 구현한 버튼 클릭 예제 코드

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>State</title>
</head>
<body>
	<h4>Click Here 👇</h4>
	<div id="ClickBtn">
		<button>Click!</button>
	</div>
	<br/>
	<span id="ClickCount">버튼 클릭 횟수 : 0회</span>
</body>
<script>
    const ClickBtn = document.getElementById("ClickBtn");
    const ClickCount = document.getElementById("ClickCount");

	let Counter = 0;
	
    function ClickCounter(){
        Counter = Counter + 1;
        ClickCount.innerText = `버튼 클릭 횟수 : ${Counter}회`;
    }

    ClickBtn.addEventListener("click", ClickCounter);
</script>
</html>
```

---

- `React`로 구현한 버튼 클릭 예제
``` html

```