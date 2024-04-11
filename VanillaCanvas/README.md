# Vanilla.js Canvas 繪畫圖形

### HTML
建立canvas畫布id設為myCanvas,等等需要用此id監聽.長度寬度設置為500px
引入css, js
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas</title>
    <link rel="stylesheet" href="canvas.css">
</head>

<body>
    <canvas id="myCanvas" width="500px" height="500px"></canvas>
    <script src="./canvas.js" defer></script>
</body>

</html>
```

### CSS
使用css設定畫布樣式
設定背景顏色、畫布框線
```
canvas {
    background-color: #ceceff;
    border: 5px soild #6e6aff;
}
```

### JS
用來在畫布上繪製圖案
宣告一個變數來監聽HTML中的畫布
將canvas設定為2d繪圖 (X, Y) 兩個座標
```
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

function drawRect() {

    // 繪畫矩形 程式碼執行區塊
};

// 呼叫繪畫函式
drawRect();
```

