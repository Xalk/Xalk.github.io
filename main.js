



let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let isMouseDown = null;

let coords = [];





canvas.addEventListener('mousedown', function () {
    isMouseDown = true;
})

canvas.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
})







canvas.addEventListener('pointermove', function (e) {

    if (isMouseDown) {
        coords.push([e.clientX, e.clientY])

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




let reset = document.querySelector('.btn-1');
reset.onclick = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 600, 600)

}


function save() {
    localStorage.setItem('coords', JSON.stringify(coords))
}




document.addEventListener('keydown', function (e) {
    if (e.keyCode == 82) {
        console.log('sdfsdf');
    }

    if (e.keyCode == 83) {
        save();
        console.log('Saved');

    }

    if (e.keyCode == 80) {
        console.log('sdfsdf');
    }




})


document.addEventListener('keydown', function (e) {

    if (e.keyCode == 82) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 600, 600)
    }
})





// let canvas2 = document.getElementById('myCanvas2');
// let ctx2 = canvas.getContext('2d');


