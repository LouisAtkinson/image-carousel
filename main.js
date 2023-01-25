const images = document.getElementById('images');
const left = document.getElementById('left');
const right = document.getElementById('right');
let position = 0;
let carouselTimer = window.setInterval(carousel, 3000);

left.addEventListener('click', function() {
    if (position > 0) {
        position -= 450;
        images.style.right = position + 'px'
        images.style.transitionDuration = '0.3s';
    } 
    resetTimer();
});

right.addEventListener('click', function() {
    if (position < 1800) {
        position += 450;
        images.style.right = position + 'px';
        images.style.transitionDuration = '0.3s';
    }
    resetTimer();
});

document.getElementById('circle1').addEventListener('click', function() {
    position = 0;
    images.style.right = position + 'px'
    images.style.transitionDuration = '0.3s';
    resetTimer();
})

document.getElementById('circle2').addEventListener('click', function() {
    position = 450;
    images.style.right = position + 'px'
    images.style.transitionDuration = '0.3s';
    resetTimer();
})

document.getElementById('circle3').addEventListener('click', function() {
    position = 900;
    images.style.right = position + 'px'
    images.style.transitionDuration = '0.3s';
    resetTimer();
})

document.getElementById('circle4').addEventListener('click', function() {
    position = 1350;
    images.style.right = position + 'px'
    images.style.transitionDuration = '0.3s';
    resetTimer();
})

document.getElementById('circle5').addEventListener('click', function() {
    position = 1800;
    images.style.right = position + 'px'
    images.style.transitionDuration = '0.3s';
    resetTimer();
})

function resetTimer() {
    clearInterval(carouselTimer);
    carouselTimer = window.setInterval(carousel, 3000);
}

function carousel() {
    if (position === 1800) {
        position = 0;
        images.style.right = position + 'px'
        images.style.transitionDuration = '0.3s';
    } else {
        position += 450;
        images.style.right = position + 'px';
        images.style.transitionDuration = '0.3s';
    }
}