
let text = document.getElementById('text').innerText;
let btn = document.querySelector('.btn')
let text2 = document.querySelector('.area')


let index = 0;

function writeText() {

    document.getElementById('text').innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 1;
    }

}

setInterval(writeText, 200);



btn.addEventListener('click', () => {
    text = text2.value;
});


