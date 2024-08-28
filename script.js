const catUrl = 'https://cataas.com/cat'
const btnSize = document.querySelector('#btn-size');
const btnReset = document.querySelector('#btn-reset');
const board = document.querySelector('.container');
const boardWidth = board.offsetWidth; // 912 by default
let pixels = 16 //by Default
let pixelWidth = boardWidth / pixels; // 57 by default

reloadBackground();

drawGrid(pixels, pixelWidth);

btnSize.addEventListener('click', () => {
    location.href = location.href;
    reloadBackground();
    board.replaceChildren();
    pixels = prompt('Choose between 10 - 400');
    while (pixels > 400) {
        pixels = prompt('Choose between 10 - 400');
    } 
    pixelWidth = boardWidth / pixels;
    drawGrid(pixels, pixelWidth);
})

btnReset.addEventListener('click', () => {
    board.replaceChildren();
    drawGrid(pixels, pixelWidth);
    location.href = location.href;
    reloadBackground();
})

board.addEventListener('mousemove', e => {
    e.target.style.backgroundColor = '';
})

function reloadBackground () {
    board.style.backgroundImage = `url(${catUrl})`;
    board.style.backgroundSize = 'cover';
    board.style.backgroundPosition = 'center'; 
}

function drawGrid (inputPixels, inputPixelWidth) {
    for (let i = 1; i <= inputPixels * inputPixels; i++){
        const pixel = document.createElement('div')
        board.appendChild(pixel)
        pixel.style.width = `${inputPixelWidth}px`;
        pixel.style.height = `${inputPixelWidth}px`;
        pixel.style.backgroundColor = 'black';
    }
}

