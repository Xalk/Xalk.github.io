



let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let isMouseDown = null;





canvas.addEventListener('mousedown', function () {
    isMouseDown = true;
})

canvas.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
})







canvas.addEventListener('mousemove', function (e) {

    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "aqua"
        ctx.fill();


        ctx.beginPath();
        ctx.strokeStyle = "aqua"
        ctx.lineWidth = 5 * 2;
        ctx.moveTo(e.clientX, e.clientY);
    }






})




//firstSave