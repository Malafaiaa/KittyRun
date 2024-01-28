const kitty = document.querySelector('.kitty');
const pipe = document.querySelector('.pipe');


const jump = () =>{
    kitty.classList.add('jump');


setTimeout(() =>{

kitty.classList.remove  ('jump');

}, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const kittyPosition = +window.getComputedStyle(kitty).bottom.replace('px', '');

    console.log(kittyPosition);


    if (pipePosition <= 120 && pipePosition > 0 && kittyPosition < 80){
pipe.style.animation = 'none';
pipe.style.left = `${pipePosition}px`;

kitty.style.animation = 'none';
kitty.style.bottom = `${pipePosition}px`;

kitty.src = './img/th.png'
kitty.style.width = '100px'
kitty.style.margin = '50px'

clearInterval(loop);
    }
},10);



document.addEventListener('keydown', jump);

