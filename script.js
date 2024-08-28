const catUrl = 'https://cataas.com/cat'
const btnSize = document.querySelector('#btn-size')
const board = document.querySelector('.container');
const boardWidth = board.offsetWidth; // 912 by default
let pixels = 16 //by Default
let pixelWidth = boardWidth / pixels; // 57 by default

reloadBackground();

drawGrid(pixels, pixelWidth);

btnSize.addEventListener('click', () => {
    reloadBackground();
    
    board.replaceChildren();
    
    pixels = prompt('Choose between 10 - 400');
    while (pixels > 400) {
        pixels = prompt('Choose between 10 - 400');
    }
    
    pixelWidth = boardWidth / pixels;
    
    drawGrid(pixels, pixelWidth);
    
})

board.addEventListener('mousemove', e => {
    e.target.style.backgroundColor = '';
})

function reloadBackground () {
    fetch(catUrl)
    .then(res => res.blob())
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        board.style.backgroundImage = `url(${imgUrl})`;
        board.style.backgroundSize = 'cover';
        board.style.backgroundPosition = 'center';
    })
    .catch(error => console.log('Error fetching the image:', error))
}

function drawGrid (inputPixels, inputPixelWidth) {
    for (let i = 1; i <= inputPixels * inputPixels; i++){
        const pixel = document.createElement('div')
        board.appendChild(pixel)
        // pixel.style.border = '1px solid red';
        pixel.style.width = `${inputPixelWidth}px`;
        pixel.style.height = `${inputPixelWidth}px`;
        pixel.style.backgroundColor = 'black';
    }
}

