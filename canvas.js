function drawOnCanvas() {
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        canvas_context = canvas.getContext('2d');
        doTimer();
    }
}

function doTimer() {
    x_pos = 0;
    timerID = setTimeout("colorBox()", 200);
}

function colorBox() {
    canvas_context.fillRect(0, 25, 50, 30);
}
