const flip = document.getElementById("flip");
const postcard = document.querySelector('.main');
flip.addEventListener('click', () => {
    event.preventDefault();
    postcard.classList.toggle('rotate-animation')
})




const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.g-input');
    inputs.forEach( input => {
        input.value = '';
    })
})

const containerBg = document.querySelector('.gradient');
const bg = document.querySelector('#bg');

const colors = [
    'linear-gradient(45deg, #31966e, #18368e, #a9baf8)',
    'linear-gradient(45deg, #4051d7, #6cf3bb, #b522ed)',
    'linear-gradient(to right top, #86a8e7, #86a8e7, #86a8e7, #86a8e7, #86a8e7, #7db0ee, #73b7f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    'linear-gradient(0deg, #a20aa0, #ca442c, #957b5f)',
    'linear-gradient(0deg, #b92165, #3836df, #ef34cd)',
    'linear-gradient(225deg, #fb725c, #f23889, #e52646)'
];

let index = 0;

bg.addEventListener('click', () => {
    index = (index + 1) % colors.length;
    containerBg.style.background = colors[index];
});
