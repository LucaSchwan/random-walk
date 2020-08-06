 function randomWalk() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    l = document.getElementById("Kettengliedlänge").value;
    n = document.getElementById("Kettenglieder").value;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    var xa = canvas.width / 2;
    var ya = canvas.height / 2;
    var xn;
    var yn;
    var x;
    var y;
    for(var i = 0; i <= n; i++) {
        var w = Math.floor(Math.random() * 360);
        x = l * Math.cos(w);
        y = l * Math.sin(w);
        xn = xa + x;
        yn = ya + y;
        if (xn < 0 || yn < 0 || xn > canvas.width || yn > canvas.height) {
            xn = xa;
            yn = ya;
            i = i--;
        }
        else {
            ctx.lineTo(xn, yn)
            console.log("X: " + xn + "Y: " + yn)
            xa = xn;
            ya = yn;
        }  
    }
    ctx.stroke();
}