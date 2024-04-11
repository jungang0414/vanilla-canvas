let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");


function drawRect() {
    // 繪製矩形
    // 使用的語法 fillRect(x, y, 長, 寬); fillStyle;
    // 矩形顏色
    ctx.fillStyle = "#ESFFCC"
    // 矩形大小 HTML 由上而下 左而右
    ctx.fillRect(210, 20, 20, 20);

    // 繪製三角形
    // 使用語法 
    // 開始繪製 beginPath()
    // 設定繪畫路徑的語法  起點moveTo(x, y) 連線至頂點lineTo(x, y);
    // 結束繪製 ClosePath();
    ctx.beginPath();
    ctx.moveTo(260, 20);
    ctx.lineTo(245, 35);
    ctx.lineTo(245, 20)
    ctx.closePath();
    ctx.fillStyle = "#ESFFCC"
    // 只有框線
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(265, 40);
    ctx.lineTo(250, 40);
    ctx.lineTo(265, 25);
    ctx.closePath();
    ctx.fiiStyle = "#ESFFCC"
    // 填滿顏色
    ctx.fill();

    // 繪製圓形
    // 使用語法 arc(x座標, y座標, 半徑, 起始角度, 結束角度, 順時針/逆時針)
    ctx.beginPath();
    ctx.arc(290, 30, 10, 0, 2 * Math.PI);
    // 填滿
    ctx.fill()

    //下半圓
    ctx.beginPath();
    ctx.arc(150, 30, 10, 0, 1 * Math.PI);
    ctx.fill();

    // 上半圓
    ctx.beginPath();
    ctx.arc(180, 30, 10, 1 * Math.PI, 0);
    ctx.fill();

    // 貝茲曲線
    // ctx.bezierCurveTo(控制點1 x坐標, y坐標, 控制點2 x坐標, y坐標, 結束點 x坐標, y坐標)
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = "#F00B50";
    ctx.stroke();

};

// 呼叫繪畫函式
drawRect();