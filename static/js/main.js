function logoAnimation() {
    var path1 = document.getElementById('myPath1');
    var length1 = path1.getTotalLength();

    path1.style.strokeDasharray = length1;
    path1.style.strokeDashoffset = length1;

    var path2 = document.getElementById('myPath2');
    var length2 = path2.getTotalLength();

    path2.style.strokeDasharray = length2;
    path2.style.strokeDashoffset = length2;

    var path3 = document.getElementById('myPath3');
    var length3 = path3.getTotalLength();

    path3.style.strokeDasharray = length3;
    path3.style.strokeDashoffset = length3;

    var path4 = document.getElementById('myPath4');
    path4.style.fill = 'transparent';

    path1.getBoundingClientRect();
    path1.style.transition = path1.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path1.style.strokeDashoffset = '0';

    path3.getBoundingClientRect();
    path3.style.transition = path3.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path3.style.strokeDashoffset = '0';

    path1.addEventListener('transitionend', function() {
        path2.getBoundingClientRect();
        path2.style.transition = path2.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
        path2.style.strokeDashoffset = '0';

        path2.addEventListener('transitionend', function() {
            path4.style.transition = 'fill 0.5s';
            path4.style.fill = '#ae8625';
        });
    });
}

function imagesAnimation() {
    var images = document.querySelectorAll("#main .row-space-between img");

    for (let i = 0; i < images.length; i++) {
        setTimeout(function() {
            images[i].classList.add('img-visible');
        }, i * 500);
    }
}

function objectsAnimation() {
    var objects = document.querySelectorAll("#main .row-space-between object");

    for (let i = 0; i < objects.length; i++) {
        objects[i].classList.add('object-visible');
    }
}

function hamburgerClick() {
    var hamburgerButton = document.getElementById('hamburger-btn');
    var navbar = document.getElementById('navbar');

    function checkWindowSize() {
        if (window.innerWidth > 768) {
            hamburgerButton.classList.remove('is-active');
            navbar.classList.remove('active');
        }
    }

    hamburgerButton.addEventListener('click', function() {
        hamburgerButton.classList.toggle('is-active');
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', checkWindowSize);

    checkWindowSize();
}

window.onload = function () {
    logoAnimation();
    imagesAnimation();
    objectsAnimation()
    hamburgerClick();
}
