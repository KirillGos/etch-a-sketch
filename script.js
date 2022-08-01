let container = document.querySelector('.container');

//Default
for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('block');
    square.style.height = '50px';
    square.style.width = '50px';
    container.appendChild(square);
}




const button = document.querySelector('button');

button.addEventListener('click', function() {
    let row = prompt('Enter a number of rows per side');
    if( row < 100) {
        container.innerText = '';
            for(let i = 0; i < (row * row); i++) {
                let square = document.createElement('div');
                square.classList.add('block');
                container.appendChild(square);

                let blockSize = Math.floor(Math.sqrt(640000 / (row * row)));
                square.style.height = `${blockSize}px`; 
                square.style.width = `${blockSize}px`; 
            
            }  
    } else {
        alert('the number is too big please enter a number that is less than 100')
    }
});

const randomColor = () => {
  return Math.floor(Math.random() * 250)
}


document.addEventListener('mouseover', function(e) {
    if( e.target.className == 'block') {
       e.target.style.backgroundColor = 'black';
    }
 });



const rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', function() {
    document.addEventListener('mouseover', function(e) {
        if( e.target.className == 'block') {
           e.target.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        }
     })
});

const blocks = document.getElementsByClassName('block');
const resetBtn = document.querySelector('#black');

resetBtn.addEventListener('click', function() {
    for(let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = 'white';
    }
})

const colorBtn = document.querySelector('#color');


colorBtn.addEventListener('click', function() {
    document.addEventListener('mouseover', function(e) {
        if( e.target.className == 'block') {
           e.target.style.backgroundColor = `black`;
        }
     })
})