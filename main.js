let bt1 = document.querySelector('.bt1');
let out = document.querySelector('.out');
bt1.onclick = () => {
    out.innerHTML = "Геть з вiдси!";
}



let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', function (e) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);

})




//firstSave