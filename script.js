
const btnSize = document.querySelector('#btn-size')
const board = document.querySelector('.container');
const boardWidth = board.offsetWidth; // 912 by default
let pixels = 16 //by Default
let pixelWidth = boardWidth / pixels; // 57 by default

for (let i = 1; i <= pixels * pixels; i++){
    const pixel = document.createElement('div')
    board.appendChild(pixel)
    pixel.style.border = '1px solid red';
    pixel.style.width = `${pixelWidth}px`;
    pixel.style.height = `${pixelWidth}px`;
}

btnSize.addEventListener('click', () => {
    
    board.replaceChildren();
    
    pixels = prompt('Choose between 10 - 400');
    while (pixels > 400) {
        pixels = prompt('Choose between 10 - 400');
    }

    pixelWidth = boardWidth / pixels;
    
    for (let i = 1; i <= pixels * pixels; i++){
        const pixel = document.createElement('div')
        board.appendChild(pixel)
        pixel.style.border = '1px solid red';
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelWidth}px`;
    }
    
})
