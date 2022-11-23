
let green = document.querySelector('.green_slide');
let blue = document.querySelector('.blue_slide');

let activeGreen = document.querySelector('.active_green');
let activeBlue = document.querySelector('.active_blue');

activeGreen.addEventListener('click', changeGreen);
activeBlue.addEventListener('click', changeBlue);

function changeGreen() {
    green.style.display = 'block';
    blue.style.display = 'none';
}

function changeBlue() {
    blue.style.display = 'block'
    green.style.display = 'none';
}
